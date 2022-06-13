// interface

// basic
interface LabeledValue {
    size: number,
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj = {size:10, label: "size 10 object"};

printLabel(myObj);

// optional properties
interface SquareConfig {
    color? : string,
    width? : number,
}

function createSquare(config: SquareConfig): {color: string, area: number} {
    let new_square = { color: "white", area: 100};
    if (config.color) {
        new_square.color = config.color;
    }
    if (config.width) {
        new_square.area = config.width * config.width;
    }
    return new_square;
}

let my_square = createSquare({color: 'black'});

// readonly properties
// 수정 불가(읽기 전용이므로)
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y:30};

// 초과 프로퍼티 검사 (Excess Property Checks)
interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare2(config: SquareConfig2): {color: string, area: number} {
    let new_square = { color: "white", area: 100};
    if (config.color) {
        new_square.color = config.color;
    }
    if (config.width) {
        new_square.area = config.width * config.width;
    }
    return new_square;
}

let squareOptions = { colour:"red", width:100};
let my_square2 = createSquare2(squareOptions);

// 함수 타입(Function Types)
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string): boolean {
    let result = source.search(subString);
    return result > -1;
}

// 인덱서블 타입(Indexable Types)
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["bob", "fred"];

// 인터페이스 확장하기 (Extendging Interfaces)
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
square.color = 'blue';
square.sideLength = 10;


// 하이브리드 타입(Hybrid Types)
interface Counter {
    (start: number) : string;
    interval: number;
    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) {} )as Counter;
    counter.interval = 123;
    counter.reset = function() {}
    return counter;
}





