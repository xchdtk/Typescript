function Person(name, age) {
    this.name = name;
    this.age = age;
}

let capt = new Person('캡틴', 100);

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    } 
}

Person.prototype.sum = () => {
    console.log("사랑해");
}

Person.prototype.hello = () => {
    console.log("hello");
}

let jinsoo = new Person('진수', 30);
console.log(jinsoo);
console.log(jinsoo.sum());

// prototype

let user = { name: 'capt', age: 100};
let admin = {};
admin.__proto__ = user;
console.log(admin.name);
console.log(admin.age);
admin.role = 'admin';
console.log(admin);

// built-in javascript => 객체에 해당하는 메서드를 사용할 수 있는 이유는 객체 프로토타입이 object이기 때문에 
// object에 해당하는 메서드를 사용할 수 있습니다
// ex
let a = {a : 1};
console.log(Object.keys(a));


