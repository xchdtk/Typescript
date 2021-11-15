function logText2<T>(text: T): T {
    console.log(text);
    return text
}

let a = logText2<string>('happy');
a.length

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown3 {
    value: string;
    selected: boolean
}
const obj3: Dropdown3 = { value: "abc", selected: false };
interface Dropdown4<T> {
    value: string;
    selected: boolean
}

const obj4: Dropdown4<number> = { value: '3', selected: false };

