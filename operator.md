# 연산자

```javascript
let a = 1; // 대입 연산자

let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);  // 산술 연산자

let a = "1";
let b = "2";

console.log(a+b); // 12 연결 연산자

let a = "1";
let b = 2;

console.log(a+b); // 12 연결 연산자 => 묵시적 형변환

let a = 5;
a = a + 10;

console.log(a); // 15 연결 연산자

let a = 5;
a += 10;

console.log(a); // 15 복합 연산자


let a = 10;
a++;

console.log(a); // 11 증감 연산자

let a = 10;

console.log(a++); // 10 증감 연산자 (후위 연산)
console.log(a); // 11

let a = 10;

console.log(++a); // 11 증감 연산자 (전위 연산)

console.log(!true); // false 논리연산자 not

console.log(true && true); // true

console.log(true && false); // false

console.log(true || true); // true

console.log(true || false); // true

let compareA = 1 == "1"; // true 

== 는 값만 비교해서 자료형을 안봄

let compareA = 1 === "1"; // false

let compareA = 1 > 2; // false

let compareA = 1;

compareA = "1"; // 동적타입 언어라 가능

console.log(typeof compareA); // string

let a;
a = a ?? 10; // 10 (null 병합 연산 : a가 null 이거나 undefined 이면 10을 넣어라)
```



