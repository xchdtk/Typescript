let hello = 'hello';
let hello2 = "hello2";
let timePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("1, sec")
    }, 1000)
})

timePromise.then((a) => {
    console.log(a)
})

import add from "./util"
const value = add(1,2);
console.log(value)