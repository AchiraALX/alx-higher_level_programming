#!/bin/bash

if [ $# -ne 1 ]; then
    echo "Usage: $0 URL"
    exit 1
fi

URL=$1

# Send GET request with header variable
curl -sH "X-School-User-Id: 98" $URL

echo " "
