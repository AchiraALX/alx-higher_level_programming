#!/usr/bin/env node
const arg =  process.argv[2];
function factorial(x) {
    if (x === 1) {
        return 1;
    }

    return x * factorial(x - 1);
}

if (!isNaN(arg)) {
    console.log(factorial(parseInt(arg)));
}
