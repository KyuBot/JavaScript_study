let arr = ["one", "two", "three"];

let one = arr[0];

let two = arr[1];

let three = arr[2];

console.log(one, two, three); // one two three


let [one, two, three] = arr; // 배열의 비 구조화 할당

console.log(one, two, three); // one two three

let [one, two, three] = ["one", "two", "three"]; // 배열의 선언 분리, 비 구조화 할당

let [one, two, three, four] = ["one", "two", "three"]; // one, two, three, undefined

let [one, two, three, four="four"] = ["one", "two", "three"]; // one, two, three, four(기본값으로 할당)


// 비 구조화 할당으로 스왑
let a = 10;

let b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10

// 객체 비 구조화 할당

let object = {one: "one", two: "two", three: "three"};

let {one, two, three} = object;

console.log(one, two, three); // one two three, 배열의 key 값을 기준으로 할당


let object = {one: "one", two: "two", three: "three", name: 'kk'};

let {name, one, two, three} = object;

console.log(one, two, three, name); // one two three kk , 순서는 중요 x! key가 중요


let object = {one: "one", two: "two", three: "three", name: 'kk'};

let {name: myName, one, two, three} = object;

console.log(one, two, three, myName); // one two three kk , 순서는 중요 x! key가 중요

//// 만약 없는 것을 넣는다면

let object = {one: "one", two: "two", three: "three", name: 'kk'};

let {name: myName, one, two, three, abc } = object;

console.log(one, two, three, myName, abc); // one two three kk undefined


let object = {one: "one", two: "two", three: "three", name: 'kk'};

let {name: myName, one, two, three, abc="four" } = object;

console.log(one, two, three, myName, abc); // one two three kk four (기본값을 넣어줌)