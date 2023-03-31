#!/usr/bin/python3
import requests
import sys

if __name__ == '__main__':
    repo = sys.argv[1]
    owner = sys.argv[2]
    url = f"https://api.github.com/repos/{owner}/{repo}/commits"
    response = requests.get(url)
    data = response.json()
    for commit in data[:10]:
        print("{}: {}".format(
            commit.get('sha'),
            commit.get('commit').get('author').get('name')))
