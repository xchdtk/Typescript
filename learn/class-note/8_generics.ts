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
// function logText<T>(text: T){
//     console.log(text);
//     return text;
// }
// const str = logText<string>("a");
// str.split('');
// const login = logText<boolean>(true);
// logText("하이");
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown1 {
    value: string;
    selected: boolean;
}

const obj1: Dropdown1 = { value: "abc", selected: false};
interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

const obj2: Dropdown2<string> = { value: 'abc', selected: false};

// 제네릭의 타입 제한
// function logTextLength<T>(text:T[]): T[]{
//     console.log(text.length);
//     text.forEach((text) => {
//         console.log(text)
//     })
//     return text;
// }

// logTextLength<string>(['hi', 'string']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기 
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text
}
console.log(logTextLength<string>('a'));
// logTextLength<number>(10);
// logTextLength({ length: 10});

// 제네릭 타입 제한 3 - key of
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;  
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

console.log(getShoppingItemOption("name"));
