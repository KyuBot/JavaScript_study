// JSON Placeholder ==> 개발자들을 위해 무료로 api 데이터를 제공
// open API

let response = fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    console.log(res);
}); // api 호출을 위한 내장 함수


async function getData () {
    let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}

getData();