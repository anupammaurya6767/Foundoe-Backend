from flask import Flask, request, jsonify
import os
import validators
from kanao.core.kanao import Kanao
from openai.error import OpenAIError

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
    try:
        if 'file' in request.files:
            file = request.files['file']
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
        else:
            data = request.json
            if not data:
                return jsonify({'error': 'No JSON data received'})

            url = data.get('url')
            queries = data.get('queries', [])

            if not url or not is_valid_url(url):
                return jsonify({'error': 'Invalid URL'})

            handler = import_handler('url')
            result = handler(url)

        kanao_instance = result.get('kanao_instance')
        responses = []
        for query in queries:
            response_txt = kanao_instance.generate_response(query)
            responses.append(response_txt)
        result['responses'] = responses

        return jsonify(result)
    except OpenAIError as e:
        return jsonify({'error': str(e)}), 500
    except Exception as e:
        return jsonify({'error': 'An internal server error occurred'}), 500

if __name__ == '__main__':
    app.run()
