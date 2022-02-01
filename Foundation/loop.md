# 반복문

```javascript
for (let i=0; i<=5; i++) {
    console.log(i); // 이때 const i 하면 안됌. read-only 
}

---------------------------------------
    
const arr = ["a", "b", "c"]

for (let i=0; i<arr.length; i++) {
    console.log(arr[i]); // a,b,c 
}

let person = {
    name: "kk",
    age: 25,
    tall: 175
}

const personKeys = Object.keys(person); // ["name", "age", "tall"] 배열로 리턴
for (let i=0; i<personKeys.length; i++) {
    console.log(personKeys[i]); // "name", "age", "tall"
}

for (let i=0; i<personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];
    console.log(${curKey}: ${curValue}); // name: "kk", age: 25, tall: 175
}


const personValues = Object.values(person); // ["kk", 25, 175] 배열로 리턴
for (let i=0; i<personValues.length; i++) {
    console.log(personValues[i]); // "name", "age", "tall"
}
```

