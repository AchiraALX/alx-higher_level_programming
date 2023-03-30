#!/bin/bash

# Check if the UrL is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 URL"
    exit 1
fi

URL=$1

# Send POST request with variable
curl -sX POST -d "email=test@gmail.com" -d "subject=I will always be here for PLD" $URL

echo "Complete verbose"
