# 조건문

```javascript
let a = 3;

if (a>=7) {
    console.log("7이상 입니다.");
} else if (a>=5) {
    console.log("5이상 입니다.");
} else {
    console.log("5이하 입니다.");
}

let country = "ko";

if (coutry === "ko") {
    console.log("한국");
} else if (country === 'cn') {
    console.log("중국");
} else {
    console.log("미 분류");
}

switch (country) {
    case "ko":
        console.log("한국");
        break; // 있어야 아래까지 안넘어감
    case "cn":
        console.log("중국");
        break;
    case "jp":
        console.log("일본");
        break;
    case "uk":
        console.log("영국");
        break;
    default :
        console.log("미분류");
        break;
}

```

