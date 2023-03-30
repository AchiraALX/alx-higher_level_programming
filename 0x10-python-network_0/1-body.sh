#!/bin/bash

# Check if URL is provided
if [ $# -eq 0 ]; then
    echo "Provide a url"
    exit 1
fi

# Use curl to send a GET request to the URL and display the 
# body is the status code is 200 ok
response=$(curl -s -o /dev/null -w "%{http_code}" "$1")
if [ "$response" -eq 200 ]; then
    curl -s "$1"
fi
