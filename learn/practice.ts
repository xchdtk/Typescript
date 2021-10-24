interface NumberArray1 {
    [index: number]: number
}

let arr1: NumberArray1 = [1, 2, 3];

interface dictionary1 {
    [key: string] : string
}

let obj1: dictionary1 = {
    "a" : "1",
    "b" : "2"
}

Object.keys(obj1).forEach(function (key) {
    console.log(key)
})

// class
class Person2 {
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number, log: string) {
        this.name = name;
        this.age = age;
        this.log = log;
    }
}