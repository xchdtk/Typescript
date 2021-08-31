// 변수에 활용할 인터페이스
var seho = {
    age: 33,
    name: "세호"
};
// 함수에 인터페이스 활용
function getUser(user) {
    console.log(user);
}
var jinsoo = {
    age: 23,
    name: 'jinsoo'
};
getUser(jinsoo);
var sum;
sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 100));
var arr = ['a', 'b', 'c'];
var obj = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/
};
console.log(Object.keys(obj));
