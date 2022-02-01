console.log(true && true); // true, 이때 && 연산자 일때 앞에가 false 이면 바로 앞을 반환 처리
                           // 앞에 true 이면 뒤를 반환

console.log(true || true); // true, 이때 || 연산자 일때 앞에가 true 이면 바로 앞을 반환 처리
                           // 앞에 false 이면 뒤를 반환

console.log(!true); // false

const getName = (person) => {
    if (!person) {
        return "객체가 아닙니다.";
    }
    return person.name;
}

let person;

const name = getName(person);
console.log(name);


const getName = (person) => {
    return person && person.name;
}

let person;

const name = getName(person);
console.log(name);

const getName = (person) => {
    const name = person && person.name; // null
    return name || "객체가 아닙니다"; // 뒤를 반환
}

let person;

const name = getName(person);
console.log(name);