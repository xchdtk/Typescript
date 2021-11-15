// 타입 단언
let a;
a = 20;
let b = a as number;
console.log(b);
console.log(a);

// DOM API 조작

let div = document.querySelector('div') as HTMLDivElement;
div.innerText;
// 일반적인 방법
// if (div) {
//     div.innerText;
// }

// 타입 단언
