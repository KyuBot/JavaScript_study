# 자료형과 형 변환

### Primitive data type (원시타입)

> number, string, boolean, undefined, null
>
> 한번에 하나의 값만 가질수 있음
>
> 하나의 고정된 저장 공간 이용



### Non-primitive data type (비 원시 타입)

> object, array, function
>
> 한번에 여러 개의 값을 가질 수 있음
>
> 여러 개의 고정되지 않는 동적 공간 사용



```javascript
숫자형 

let age = 25;

let tall = 175.9;

console.log(age + tall) => 정수 실수 구분 하지 않음

let inf = Infinity;
let inf = -Infinity;
let inf = NaN; = > 연산의 실패 결과값으로 사용

셋 다 숫자형으로 인식
```



```javascript
문자형

let name = "hello";

let name2 = `hello`; => 문자열 안에 변수의 값을 집어 넣기 위하여 사용

let name3 = `hello ${name}`; => template literal 이라고 함
```



```javascript
boolean

let isSwitchOff = true;
let isSwitchOff = false;
```



```javascript
Null

let a = null; => 직접 넣어 줘야함 (의도적으로 아무것도 안가르킨다는 것을 명시)
let a; => 이렇게 하면 undefined 로 출력
```



```javascript
undefined

let variable;
console.log(variable) => undefined

변수를 선언 했지만 값을 안넣으면 undefined
```



```javascript
형 변환

let numberA = 12;
let numberB = 2;

console.log(numberA *numberB); // 24

let numberA = 12;
let numberB = '2';

console.log(numberA *numberB); // 24 => 문자열을 자동으로 숫자형으로 형변환 casting
의도하지 않았음 => 자바스크립트 엔진이 묵시적으로 형변환을 함

let numberA = 12;
let numberB = '2';

console.log(numberA + numberB); // 122 => 덧셈은 숫자를 문자형으로 바꾼 후 둘을 더해버린다.

let numberA = 12;
let numberB = '2';

console.log(numberA + parseInt(numberB)); // 14 => 문자열을 숫자로 의도적 형변환
=> 명시적 형변환!
```

