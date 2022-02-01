# 함수 표현식 & 화살표 함수

```javascript
// 함수 표현식
let hello = function () {
    return '안녕하세요 여러분';
}

console.log(hello);

출력 값 : 

ƒ hello() {}
<constructor>: "Function"
name: "Function"

const helloText = hello();
console.log(helloText);

-------------------------------------------------
    
console.log(helloB());

let helloA = function () {
    return "안녕하세요 여러분";
} // 함수 표현식

function helloB() {
    return "안녕하세요 여러분";
} // 함수 선언식

=> 출력 하면 "안녕하세요 여러분"

이것은 자바스크립의 특징인 `호이스팅`

함수 선언식은 프로그램 시작전에 코드의 최상단으로 끌어올려짐!!

    
이떄 위에 console.log(helloA); // 에러가 출력! 호이스팅 x

-------------------------------------------------
    
let helloA = () => {
    return "안녕하세요 여러분";
} // 화살표 함수

let helloA = () => "안녕하세요 여러분"; // 화살표 함수

화살표 함수도 호이스팅 대상이 아니다!
```

