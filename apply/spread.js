const cookie = {
    base: "cookie",
    madeIn: "koera"
};

const chochochipCookie = {
    base: "cookie",
    madeIn: "koera",
    toping: "chocochip"
};

const blueberryCookie = {
    base: "cookie",
    madeIn: "koera",
    toping: "blueberry"
};

const strawberryCookie = {
    base: "cookie",
    madeIn: "koera",
    toping: "strawberry"
};

// base와 madeIn은 계속 중복

const cookie = {
    base: "cookie",
    madeIn: "koera"
};

const chochochipCookie = {
    ...cookie,
    toping: "chocochip"
};

const blueberryCookie = {
    ...cookie,
    toping: "blueberry"
};

const strawberryCookie = {
    ...cookie,
    toping: "strawberry"
};  

// ... => spread 연산자. 객체의 값을 새로운 객체에 펼쳐주는 연산자

const noTopingCookies = ['촉촉한 쿠키', '안촉촉한 쿠키'];
const topingCookies = ['바나나쿠키', '블루베리쿠키', '딸기쿠키', '초코칩쿠키'];

const allCookies = [...noTopingCookies, ...topingCookies];
const allCookies = [...noTopingCookies, '함정쿠키', ...topingCookies]; // 도 가능