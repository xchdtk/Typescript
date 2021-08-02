"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hello = 'hello';
let hello2 = "hello2";
let timePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1, sec");
    }, 1000);
});
timePromise.then((a) => {
    console.log(a);
});
const util_1 = require("./util");
const value = util_1.default(1, 2);
console.log(value);
