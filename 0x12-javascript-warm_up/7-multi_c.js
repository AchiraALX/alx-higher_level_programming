#!/usr/bin/env node
const args = process.argv;
if (isNaN(args[2])) {
    console.log("Missing number of occurrences");
} else {
    for (let index = 0; index < parseInt(args[2]); index++) {
        console.log("C is fun");
    }
}
