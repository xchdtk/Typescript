// enum은 별도값을 지정하지 않으면 숫자형 enum으로 취급
// 숫자형 enum
enum Shoes1 {
    Nike,
    Adidas 
}
// Shoes.Nike = 0
let myShoes1 = Shoes1.Nike;
console.log(myShoes1);

// Shoes.Adidas = 1
let myShoes2 = Shoes1.Adidas;
console.log(myShoes2);

// 문자형 enum
enum Shoes2 {
    Nike = '나이키',
    Adidas = "아디다스"
}

let myShoes3 = Shoes2.Nike;
console.log(myShoes3);

let myShoes4 = Shoes2.Adidas;
console.log(myShoes4);

// enum 활용 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}
function askQuestion(answer: Answer):void {
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}
// enum에서 제공한 파라미터만 넣을 수 있다.
askQuestion(Answer.Yes)

// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');