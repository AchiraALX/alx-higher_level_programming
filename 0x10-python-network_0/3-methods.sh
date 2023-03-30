#!/bin/bash

# Get HTTP methods
if [ $# -eq 0 ]; then
    echo "Provide a URL"
    exit 1
fi

curl -sI "$1" | grep "Allow" | cut -d ' ' -f 2-
