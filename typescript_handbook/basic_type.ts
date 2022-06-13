// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;

// String
let color: string = 'blue';
color = 'red';

// Array
let list1: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];

x = ["hello", 10];

// Enum(열거)
enum Color1 {Red, Green, Blue}
let c: Color1 = Color1.Green;

enum Color2 {Red = 1, Green = 2, Blue = 4}
let d: Color2 = Color2.Red;

enum Color3 {Red = 1, Green, Blue}
let colorName: string = Color3[2];

console.log(colorName); 


