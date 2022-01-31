# 콜백 함수

```javascript
function checkMood (mood) {
    if (mood === 'good') {
        // 기분 좋을때 하는 동작
        sing();
    } else {
        // 기분 안좋을때 하는 동작
        cry();
    }
}

function cry () {
    console.log("Action :: CRY");
}

function sing () {
    console.log("Action :: SING");
}

function dance () {
    console.log("Action :: DANCE");
}
checkMood("good");

----------------------------------------------


function checkMood (mood, goodCallback, badCallback) {
    if (mood === 'good') {
        // 기분 좋을때 하는 동작
        goodCallback();
    } else {
        // 기분 안좋을때 하는 동작
        badCallback();
    }
}

function cry () {
    console.log("Action :: CRY");
}

function sing () {
    console.log("Action :: SING");
}

function dance () {
    console.log("Action :: DANCE");
}
checkMood("sad", sing, cry);

// 콜백함수란 함수의 파라미터로 함수를 넘김
```

