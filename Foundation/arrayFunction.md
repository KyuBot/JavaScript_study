# 배열 내장함수

```javascript
const arr = [1,2,3,4];

arr.forEach((elm) => console.log(elm));

arr.forEach(function (elm) {
    console.log(elm);
});

-----------------------------------------
    
const arr = [1,2,3,4];
const newArr = [];

arr.forEach(function (elm) {
    newArr.push(elm);
});

-----------------------------------------

const arr = [1,2,3,4];
const newArr = arr.map((elm) => {
    return elm;
});

-----------------------------------------

const arr = [1,2,3,4];
let number = 3;

console.log(arr.includes(number)); // true : === 형식임

-----------------------------------------

const arr = [1,2,3,4];
let number = 3;

console.log(arr.indexOf(number)); // 2 , 만약 없는 번호이면 -1을 return

-----------------------------------------

const arr = [
    {color : "red"},
    {color : "blue"},
    {color : "green"},
    {color : "black"},
];
let number = 3;

console.log(arr.findIndex((elm)=>elm.color==="green")); // 2. 일치 조건이 중복되면 첫번째꺼를 찾는다.

-----------------------------------------

const arr = [
    {color : "red"},
    {color : "blue"},
    {color : "green"},
    {color : "black"},
];
let number = 3;

const idx = arr.findIndex((elm)=>{
    return elm.color === "blue";
})

console.log(idx); // 1

-----------------------------------------

const arr = [
    {color : "red"},
    {color : "blue"},
    {color : "green"},
    {color : "black"},
];
let number = 3;

const element = arr.find((elm)=>{
    return elm.color === "blue";
})

console.log(element); // color : "blue"

-----------------------------------------

const arr = [
    {num:1, color : "red"},
    {num:2,color : "blue"},
    {num:3,color : "green"},
    {num:4,color : "black"},
];
let number = 3;

const element = arr.filter((elm)=>{
    return elm.color === "blue"; 
})

console.log(element); // [{num:2, color: "blue"}] 배열로 리턴 

-----------------------------------------

const arr = [
    {num:1, color : "red"},
    {num:2,color : "blue"},
    {num:3,color : "green"},
    {num:4,color : "black"},
];
let number = 3;

const element = arr.slice((0, 2)=>{
    return elm.color === "blue"; 
})

console.log(element); // [{num:0, color: "red"}, {num:1, color: "blue"}] 배열로 리턴

-----------------------------------------

const arr1 = [
    {num:1, color : "red"},
    {num:2,color : "blue"},
];

const arr2 = [
    {num:3,color : "green"},
    {num:4,color : "black"},
];

console.log(arr1.concat(arr2)); //  [
    {num:1, color : "red"},
    {num:2,color : "blue"},
    {num:3,color : "green"},
    {num:4,color : "black"},
]; 배열로 리턴

-----------------------------------------

const chars = ["나", "다", "가"];

chars.sort();

console.log(chars); // ["가", "나", "다"]

-----------------------------------------

const numbers = [0, 1, 3, 2, ,10, 30, 20];

numbers.sort();

console.log(numbers); // [0, 1, 10, 2, 20, 3, 30] 숫자가 아닌 문자열 순으로 sort 함

const compare = (a, b) => {
    // 1. 같다
    // 2. 크다
    // 3. 작다
    
    if (a>b) {
        return 1;
    }
    if (a<b) {
        return -1;
    }
    return 0;
}

numbers.sort(compare);
console.log(numbers); // [0, 1, 2, 3, 10, 20, 30] // 내림차순 하려면 return 1과 -1을 바꿔줌

-----------------------------------------

const arr = ["kk", "님", "안녕하세요", "또 오셨군요"];

console.log(arr.join()); // kk.님.안녕하세요.또 오셨군요
console.log(arr.join(" ")); // kk 님 안녕하세요 또 오셨군요
```

