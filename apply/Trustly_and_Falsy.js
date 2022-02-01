let a = "";

if (a) {
    console.log("True");
} else {
    console.log("False"); 
}
// FALSE 출력

let a = "string";

if (a) {
    console.log("True");
} else {
    console.log("False"); 
}
// True 출력

// boolean 값을 넣지 않아도 참이나 거짓을 인식하는 성질이 있음
// undefined => False, [] => True

// True: [], {}, 숫자, 문자열, Infinity => Trustly
// False: null, undefined, 숫자 0, -0, NaN, "" => Falsy 코딩하기 활용하기 좋음

const getName = (person) => {
    return person.name;
};

let person = {name: "kk"};
const name = getName(person);

// kk 출력가능

const getName = (person) => {
    return person.name;
};

let person;
const name = getName(person);

// undefined 는 객체가 아니라 접근할 수 없다는 에러 출력

const getName = (person) => {
    if (person === undefined || person === null) {
        return "객체가 아닙니다";    
    }
    return person.name;
};

let person;
let person = null;
const name = getName(person);

const getName = (person) => {
    if (!person) { // Not False => True
        return "객체가 아닙니다";    
    }
    return person.name;
};

let person;
let person = null;
const name = getName(person);