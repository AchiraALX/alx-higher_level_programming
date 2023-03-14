#!/usr/bin/node

exports.nbOccurrences = function (list, searchElement) {
  let count = 0;
  list.forEach(element => {
    if (element === searchElement) {
      count++;
    }
  });

  return count;
};
