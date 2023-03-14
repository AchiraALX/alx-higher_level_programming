#!/usr/bin/node

const list = require('./100-data').list;
const finalList = list.map((x, y) => y * x);
console.log(list);
console.log(finalList);
