// 타입 추론 기본 1

let a = 'abc'; 

function getB(b = 10) {
    let c = 'abc';
    return b + c;
}

// 타입 추론 기본 2

// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: "jinsoo",
//     title: "사랑해"
// }

// 타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

let detailedItem: DetailDropdown<string> = {
    value: "jinsoo",
    title: "사랑해",
    description: "너만을",
    tag: "3"
}

// Best Common Type -> 가장 근접한 타입을 추론
let arr = [1, 2, true, true, 'a'];


// 내부적으로 typescript launguage server가 동작하고 있기 때문에
// typescript 타입추론이나 intellisense가 가능하게 되는 것이다.





