// function logMessage(value: any) {
//     console.log(value);
// }
// 유니온 타입(|)은 공통된 속성만 접근이 가능하다.
// function askSomeone(someone: Developer | Person) {
//     console.log(someone.name)
// }
// askSomeone({ name: '디벨로퍼', skill: "웹개발"});
// askSomeone({ name: "캡틴", age: 100});
// 인터섹션 타입
function askSomeone(someone) {
    console.log(someone.name);
    console.log(someone.skill);
    // console.log(someone.age);
}
askSomeone({ name: '디벨로퍼', skill: "웹개발", age: 100 });
console.log();
askSomeone({ name: "캡틴", age: 10, skill: "앱개발" });
// let seho: string | number | boolean;
// let capt: string & number & boolean;
