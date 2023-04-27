#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const port = process.argv[3];
const dict = {};

request(url, function (error, response, body) {
    if (error) {
        console.log(error); // Print the error if one occurred
    } else {
        for (const task of JSON.parse(body)) {
        if (task.completed === true) {
            if (dict[task.userId] === undefined) {
            dict[task.userId] = 1;
            } else {
            dict[task.userId] += 1;
            }
        }
        }
        console.log(dict);
    }
});