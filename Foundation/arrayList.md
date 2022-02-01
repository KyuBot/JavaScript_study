# 배열

```javascript
let arr = new Array();

let arr = []; // 배열 리터릴

console.log(arr); // []

let arr = [1,2,3,4];

console.log(arr); // [1,2,3,4]

let arr = [1, "2", true, null, undefined, {}, [], function() {}]; // 자료형이 다 달라도 됌

------------------------------------------

let arr = [1,2,3,4,5];

console.log(arr[0]); // 1
console.log(arr[7]); // undefined

arr.push(6);
console.log(arr); // [1,2,3,4,5,6]

console.log(arr.length); // 6
console.log(arr["length"]); // 6

arr.pop();
console.log(arr); // [1,2,3,4,5]
```

