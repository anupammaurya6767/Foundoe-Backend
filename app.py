# app.py

from flask import Flask, request, jsonify
import os
import validators
from kanao.core.kanao import Kanao

# Replace 'your_openai_api_key' with your actual OpenAI API key
from constants.constants import OPENAI_API_KEY


app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


open_ai_api_key = OPENAI_API_KEY

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def is_valid_url(url):
    return validators.url(url)

def import_handler(file_type):
    if file_type == 'pdf':
        from handlers.handle_pdf import handle_pdf
        return handle_pdf
    elif file_type == 'txt':
        from handlers.handle_txt import handle_txt
        return handle_txt
    elif file_type == 'url':
        from handlers.handle_url import handle_url
        return handle_url
    else:
        return None

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        url = request.form.get('url')
        if url and is_valid_url(url):
            handler = import_handler('url')
            result = handler(url)
        else:
            return jsonify({'error': 'No file part and no valid URL'})
    else:
        file = request.files['file']

        if file.filename == '':
            url = request.form.get('url')
            if url and is_valid_url(url):
                handler = import_handler('url')
                result = handler(url)
            else:
                return jsonify({'error': 'No selected file and no valid URL'})
        else:
            if file and allowed_file(file.filename):
                file_type = file.filename.lower().split('.')[-1]
                handler = import_handler(file_type)

                if handler:
                    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
                    file.save(file_path)
                    result = handler(file_path)
                else:
                    return jsonify({'error': 'Unsupported file type'})
            else:
                return jsonify({'error': 'File type not allowed'})

    kanao_instance = result.get('kanao_instance')
    
    # Check if 'queries' are present in the request
    queries = request.form.getlist('queries')
    
    if queries:
        responses = []
        for query in queries:
            response_txt = kanao_instance.generate_response(query)
            responses.append(response_txt)
        result['responses'] = responses

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
