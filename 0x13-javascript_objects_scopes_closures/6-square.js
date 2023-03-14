#!/usr/bin/node

const SquareB = require('./5-square');
module.exports = class Square extends SquareB {
  charPrint (c) {
    super.print(c);
  }
};
