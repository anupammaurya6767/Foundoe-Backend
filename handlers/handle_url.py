# handlers/handle_url.py

from kanao.core.kanao import Kanao
from constants.constants import OPENAI_API_KEY

def handle_url(url):
    kanao_instance = Kanao(OPENAI_API_KEY)
    kanao_instance.train_on_url(url)
    return {'response_type': 'url', 'url': url, 'kanao_instance': kanao_instance}
