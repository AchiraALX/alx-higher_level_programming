#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2] + '/';
request(url, function (error, response, body) {
  if (error) {
    console.log(error); // Print the error if one occurred
  } else {
    console.log(JSON.parse(body).title); // Print the response status code if a response was received
  }
});
