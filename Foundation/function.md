# 함수

```javascript
let width = 10;
let height = 20;

let area1 = width * height; 
console.log(area1); // 200

function getArea() {
    let width = 10;
    let height = 20;
    
    let area = width * height;
    console.log(area); // 함수 선언식, 함수 선억 방식의 함수 생성
}

getArea(); // 함수 호출
console.log("함수 실행 완료");

=> 200 출력 후 함수 실행 완료 출력

function getArea(width, height) {
    let area = width * height;
    console.log(area); // 함수 선언식, 함수 선억 방식의 함수 생성
}

getArea(10, 20); // 함수 호출
console.log("함수 실행 완료");

=> 200 출력 후 함수 실행 완료 출력

function getArea(width, height) {
    let area = width * height;
    return area;
}

let area1 = getArea(10, 20); // 함수 호출
console.log(area1); // 200
console.log("함수 실행 완료");

function getArea(width, height) {
    let area = width * height;
    return area; // 지역변수
}

let area1 = getArea(10, 20); // 함수 호출
console.log(area); // area is not defined 
console.log("함수 실행 완료");

let count = 1; // 전역변수
function getArea(width, height) {
    let area = width * height;
    console.log(count); // 1출력
    return area;
}
```

