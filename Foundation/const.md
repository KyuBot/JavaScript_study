# 변수와 상수

### 변수 : let , var, const



### 규칙

- 변수명는 기호를 사용 불가
- 유일한 기호는 : _ 와 $
- 변수명은 처음에 숫자가 나와서는 안된다
- 예약어를 피해야 한다



### Var (변수) => let (변수)

```javascript
var age = 25;

var age = 30;

오류가 없이 동작함

but let 은 변수 중복 선언을 허용 하지 않는다.
따라서 var 보다는 let 를 사용 권장
```



### Const(상수)

```javascript
const age = 25;

상수라 바꿀 수 없다.
오류가 동작. read-only

상수는 선언 이후 값을 바꿀 수 없기 때문에
const age;
age = 25; 이것도 에러
```

