#!/bin/bash
#Script that cause the server to respond with You go me! message
curl -sLX PUT 0.0.0.0:5000/catch_me -H "Origin: HolbertonSchool" -d "user_id=98"
