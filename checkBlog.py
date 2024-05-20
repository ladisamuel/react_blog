import requests as r

endpoint = "https://www.androidcentral.com/wearables/rumored-samsung-galaxy-watch-ultra-has-one-path-to-success"

text_result = r.get(endpoint).text
# json_result = r.get(endpoint).json()

# print(json_result)
print(text_result)