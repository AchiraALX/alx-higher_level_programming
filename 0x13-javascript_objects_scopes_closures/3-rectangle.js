#!/usr/bin/node

module.exports = class Rectangle {
  constructor (w, h) {
    if (w <= 0 || h <= 0 || w === undefined || h === undefined) {
      return;
    }
    this.height = h;
    this.width = w;
  }

  print () {
    const c = 'X';
    for (let h = 0; h < this.height; h++) {
      console.log(c.repeat(this.width));
    }
  }
};
