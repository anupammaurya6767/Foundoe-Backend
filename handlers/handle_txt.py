# handlers/handle_txt.py

from kanao.core.kanao import Kanao
from constants.constants import OPENAI_API_KEY

def handle_txt(file_path):
    kanao_instance = Kanao(OPENAI_API_KEY)
    with open(file_path, 'r') as txt_file:
        content = txt_file.read()
    kanao_instance.train_on_txt(content)
    return {'response_type': 'txt', 'content': content, 'kanao_instance': kanao_instance}
