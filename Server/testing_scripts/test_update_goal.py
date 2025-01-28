import requests

url = 'http://localhost:5001/goals/1'

payload = {
    'name': 'Updated Goal Name',
    'saved': 100
}

response = requests.put(url, json=payload)

# print('Status Code:', response.status_code) #==> Status Code: 200
# print('Response JSON', response.json()) #==> Response JSON {'id': 1, 'name': 'Updated Goal Name', 'saved': 100, 'target': 230000}

