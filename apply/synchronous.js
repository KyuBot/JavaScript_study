// 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
// 이전 작업이 진행 중 일때는 다음 작업을 수행하지 않고 기다림
// 먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.
// 동기 방식의 처리 => 싱글 스레드 작업 수행 방식

// 자바 스크립트는 멀티스레드가 안되기 때문에, 여러 개 작업을 동시에 실행시킴
// 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행
// 비동기 작업

function taskA () {
    console.log("A끝");
}

taskA();
console.log("코드 끝");

// A끝 -> 코드 끝

function taskA () {
    setTimeout(()=> {console.log("A끝");}, 2000
    )
}

taskA();
console.log("코드 끝");

// 코드 끝 -> A끝


function taskA (a, b, cb) {
    setTimeout(()=> {
        const res = a+b;
        cb(res);
    }, 3000
    )
}

taskA(3, 4, (res)=> {
    console.log(res);
});
console.log("코드 끝");

// 코드 끝 -> 7

/////////////////// 다른 작업

function taskA (a, b, cb) {
    setTimeout(()=> {
        const res = a+b;
        cb(res);
    }, 3000
    )
}

function taskB(a, cb) {
    setTimeout(()=> {
        const res = a*2;
        cb(res);
    }, 1000
    )
}

taskA(3, 4, (res)=> {
    console.log(res);
});

taskB(7, (res)=> {
    console.log(res);
})

console.log("코드 끝");

// 코드 끝 -> 14 -> 7

///////////////////// 다른 작업

function taskA (a, b, cb) {
    setTimeout(()=> {
        const res = a+b;
        cb(res);
    }, 3000
    )
}

function taskB(a, cb) {
    setTimeout(()=> {
        const res = a*2;
        cb(res);
    }, 1000
    )
}

function taskC(a, cb) {
    setTimeout(()=> {
        const res = a*-1;
        cb(res);
    }, 2000
    )
}

taskA(3, 4, (res)=> {
    console.log(res);
});

taskB(7, (res)=> {
    console.log(res);
})

taskC(14, (res)=> {
    console.log(res);
})

console.log("코드 끝");

// 코드 끝 -> 14 -> -14 -> 7

// JS Engine : 메모리 할당 (heap), 코드 실행(call back)
// call stack 에 들어가지 않는 비동기 함수는 Web APIs 에 들어감
// Web APIs => callback queue 로 옮겨짐
// event loop로 결과 값을 call stack 에 반환

function taskA (a, b, cb) {
    setTimeout(()=> {
        const res = a+b;
        cb(res);
    }, 3000
    )
}

function taskB(a, cb) {
    setTimeout(()=> {
        const res = a*2;
        cb(res);
    }, 1000
    )
}

function taskC(a, cb) {
    setTimeout(()=> {
        const res = a*-1;
        cb(res);
    }, 2000
    )
}

taskA(4, 5, (a_res)=>{
    console.log(a_res);
    taskB(a_res, (b_res)=>{
        console.log(b_res);
        taskC(b_res, (c_res)=>{
            console.log(c_res);
        })
    })
})

console.log("코드 끝");

// 코드 끝 -> 9 -> 18, -18