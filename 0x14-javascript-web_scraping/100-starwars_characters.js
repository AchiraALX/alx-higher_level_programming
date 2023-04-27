#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request(url, function (error, response, body) {
  if (error) {
    console.log(error); // Print the error if one occurred
  } else {
    for (const character of JSON.parse(body).characters) {
      request(character, function (error, response, body) {
        if (error) {
          console.log(error); // Print the error if one occurred
        } else {
          console.log(JSON.parse(body).name);
        }
      });
    }
  }
}
);
