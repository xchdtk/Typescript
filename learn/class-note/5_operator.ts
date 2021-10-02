// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);


// 유니온 타입(|)
// let jinsoo: string | number | boolean
// function logMessage(value: string | number) {
//     if (typeof value === 'number') {
//         value.toLocaleString();
//         return
//     }
//     if (typeof value === 'string') {
//         value.toString();
//         return
//     }
//     throw new TypeError('value must be string or number')
// }

// logMessage('hello');
// logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
// 유니온 타입(|)은 공통된 속성만 접근이 가능하다.
// function askSomeone(someone: Developer | Person) {
//     console.log(someone.name)
// }

// askSomeone({ name: '디벨로퍼', skill: "웹개발"});
// askSomeone({ name: "캡틴", age: 100});


// 인터섹션 타입
function askSomeone(someone: Developer & Person) {
    console.log(someone.name);
    console.log(someone.skill);
    // console.log(someone.age);
}

askSomeone({ name: '디벨로퍼', skill: "웹개발", age: 100});
console.log()
askSomeone({ name: "캡틴", age: 10, skill: "앱개발"});

// let seho: string | number | boolean;
// let capt: string & number & boolean;

 