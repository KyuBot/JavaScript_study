let a = 3;

if (a>0) {
    console.log("양수");
} else {
    console.log("음수");
}

let a = 3;

a >=0 ? console.log("양수") : console.log("음수");

let a = [];

a.length === 0 ? console.log("빈 배열") : console.log("빈 배열이 아닙니다");

const arrayStatus = a.length === 0 ? "빈 배열" : "빈 배열이 아닙니다";

// 값을 넣어 줄 수 있다.

let a;

const result = a ? true : false;
console.log(result); // false

// ToDo : 학점 계산 프로그램

let score = 100;

score >= 90 ? console.log("A+") : score >= 50 ? console.log("B+") : console.log("F");
// 삼항 연사자 중첩은 가독성이 떨어져서 가급적 if문 사용

if (score) {
    console.log("A+");
} else if (score >= 50) {
    console.log("B+");
} else {
    console.log("F");
}