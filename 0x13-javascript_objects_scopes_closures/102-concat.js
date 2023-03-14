#!/usr/bin/node

const args = process.argv;
const fs = require('fs');
const fileAContent = fs.readFileSync(args[2], 'utf-8', function (err, result) {
  if (err) {
    console.log(err.stack);
  }
});

const fileBContent = fs.readFileSync(args[3], 'utf-8', function (err, result) {
  if (err) {
    console.log(err.stack);
  }
});

const fileCContent = fileAContent.concat(fileBContent);

fs.writeFile(args[4], fileCContent.toString(), function (err) {
  if (err) {
    console.log(err.stack);
  }
});
