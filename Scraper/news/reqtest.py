import requests

links = requests.get('http://127.0.0.1:8000/api/links/punch')
result = links.json()
bola = []
for index in result['results']:
    bola.append(index['name'])
    # print(index)

print(bola)
