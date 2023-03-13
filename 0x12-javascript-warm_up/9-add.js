#!/usr/bin/env node
const args =  process.argv;
let a = args[2];
let b = args[3];

function add(a, b) {
    return a + b;
}

if (!isNaN(a) && !isNaN(b)) {
    console.log(add(parseInt(a), parseInt(b)))
}
