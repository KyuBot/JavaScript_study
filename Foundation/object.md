# 객체

```javascript
let person = new Object(); // 객체 생성

let person = {}; // 객체 생성 , 객체 리터럴 방식

let person = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: "value2"
};

console.log(person);
//{key: "value", key1: "value2"}
//key: "value"
//key1: "value2"

console.log(person.key); // value

let person = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: true,
    key2: undefined,
    key3: [1,2],  // 자료형이 달라도 됌
    key4: function() {}; // key끼리 중복되도 되지만, 가장 뒤에있는 프로퍼티 기준으로 찾음
};

console.log(person.name); // 없는 key 접근 시, undefined

console.log(person['key']); // 이렇게도 접근 가능

function getPropertyVaule (key) {
    return person[key];
}

console.log(getPropertyValue("key")) // value

--------------------------------------------------


let person = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: "value2"
};

person.location = "한국"; // 프로퍼티 추가
console.log(person["location"]); // 한국

person["location"] = "한국"; // 프로퍼티 추가
console.log(person["location"]); // 한국

person.key = "value2"
console.log(person.key) // value2 값 변경

---------------------------------------------------
    
const person = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: "value2"
};

person.location = "한국"; // 프로퍼티 추가
console.log(person["location"]); // 한국

person["location"] = "한국"; // 프로퍼티 추가
console.log(person["location"]); // 한국

person.key = "value2"
console.log(person.key) // value2 값 변경

let => const 로 바뀌어도 에러 x
프로퍼티 수정 행위라서, person 자체를 수정하는 행위가 아니라서 가능

person 수정 자체는
person = {
    key="value3" // 에러가 남
}
person 자체를 다시 선언 하면 에러

---------------------------------------------------
    
const person = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: "value2"
};

delete person.key // 프로퍼티 삭제
delete person["key"] // 프로퍼티 삭제

연결을 끊을 뿐, 메모리는 계속 사용 되어지고 있는 중

따라서 
person.key = null; // name=null 이 되고 메모리에서 날릴 수  있음

----------------------------------------------------

const person = {
    key: "value", // 프로퍼티 (객체 프로퍼티), 멤버
    key1: "value2", // 멤버
    say: function () {
        console.log("안녕");
    } // 메서드 -> 방법
};

person.say(); // 안녕
person["say"](); // 안녕


-----------------------------------------------------

const person = {
    key: "value", // 프로퍼티 (객체 프로퍼티), 멤버
    key1: "value2", // 멤버
    name: 'kk',
    say: function () {
        console.log(`안녕 나는 ${this["name"]}`);
    } // 메서드 -> 방법
};

person.say(); // 안녕 나는 kk
person["say"](); // 안녕 나는 kk
console.log(person.gender); // undefined
console.log(`name: ${"name" in person}`); // name: true
console.log(`gender: ${"gender" in person}`); // gender: false
```

