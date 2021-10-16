interface User {
    age: number;
    name: string;
}

// 변수에 활용할 인터페이스
let seho: User = {
    age: 33,
    name: "세호"
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
} 
const jinsoo: User = {
    age: 23,
    name: 'jinsoo'
}
getUser(jinsoo);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

console.log(sum(1,100))

// 인덱싱
interface StringArray {
    [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c']

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string] : RegExp
}

let obj: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

Object.keys(obj).forEach(function(key){
    console.log(key)
})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

let capt: Developer = {
    name: 'jinsoo',
    age: 23,
    language: "ts"
}


