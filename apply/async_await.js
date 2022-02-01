// async : promise 처럼 비동기를 다룸

function hello() {
    return 'hello';
}

async function helloAsync() {
    return 'hello Async';
} // promise 를 리턴

console.log(hello());
console.log(helloAsync());

// hello, Promise 객체 출력

helloAsync().then((res)=> {
    console.log(res);
}) // hello Async

///////////////////////////////////////

function delay(ms) {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve();
        }, ms);
    });
}

async function helloAsync() {
    return delay(3000).then(()=>{
        return 'hello Async';
    });
}

helloAsync().then((res)=> {
    console.log(res);
})

////////////////////////////////////////

function delay(ms) {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve();
        }, ms);
    });
}

async function helloAsync() {
    await delay(3000); // 비동기 함수를 동기적으로 수행되도록 함
    return 'hello Async'; // await은 async 함수 내에서만 사용 가능
}

helloAsync().then((res)=> {
    console.log(res);
})

//////////////////////////////////////////

function delay(ms) {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve();
        }, ms);
    });
}

async function helloAsync() {
    await delay(3000); // 비동기 함수를 동기적으로 수행되도록 함
    return 'hello Async'; // await은 async 함수 내에서만 사용 가능
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();