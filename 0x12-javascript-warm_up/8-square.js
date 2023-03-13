#!/usr/bin/env node
const args =  process.argv;
if (!isNaN(args[2])) {
    const side = parseInt(args[2]);
    for (let index = 0; index < side; index++) {
        let line = "";
        for (let i = 0; i < side; i++) {
            line = line + "X"
        }
        console.log(line);
    }
} else {
    console.log("Missing size");
}
