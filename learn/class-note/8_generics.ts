// 제네릭이란 타입을 마치 함수의 파라미처처럼 사용하는 것을 의미

// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText("하이");
// logText(10);

// 제네릭 기본문법
// function logText<T>(text:T): T {
//     console.log(text);
//     return text;
// }

// logText<string>('10');

// 함수 중복 문제
// function logText(text:string) {
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }

// 유니온 타입 문제
// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a = logText('a');
// console.log(a);
// logText(10);

// 제네릭으로 문제 해결
function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const str = logText<string>("a");
str.split('');
const login = logText<boolean>(true);
// logText("하이");
// logText(10);


