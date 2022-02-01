// 비동기 3 가지 상태
// pending (대기 상태), Fulfilled (성공), Rejected(실패)

function isPositive(number, resolve, reject) {
    setTimeout(()=> {
        if (typeof number === 'number') {
            resolve(number >= 0 ? "양수":"음수");
        } else {
            reject("실패");
        }
    }, 2000)
}

isPositive(10, (res)=>{console.log(res)}, (err)=>{console.log(err)});
// 양수 출력

isPositive([], (res)=>{console.log(res)}, (err)=>{console.log(err)});
// 실패 출력


///////////////// 다른 작업

function isPositive(number, resolve, reject) {
    setTimeout(()=> {
        if (typeof number === 'number') {
            resolve(number >= 0 ? "양수":"음수");
        } else {
            reject("실패");
        }
    }, 2000)
}

function isPositiveP(number) {
    const executor = (resolve, reject)=> {
        setTimeout(()=>{
            if (typeof number === 'number') {
                resolve(number >= 0 ? "양수":"음수");
            } else {
                reject("실패");
            }
        }, 2000);
    };
    const asyncTask = new Promise(executor);
    return asyncTask;
}

const res = isPositiveP(101);
res.then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
// 양수 출력


//////////////////////////////////// 다른 작업

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

taskA(3, 4, (a_res)=>{
    console.log(a_res);
    taskB(a_res, (b_res)=>{
        console.log(b_res);
        taskC(b_res, (c_res)=>{
            console.log(c_res);
        })
    })
}) // 7 -> 14 -> -14

////////////////////////////////////////

function taskA (a, b) {
    return new Promise((resovle, reject)=> {
        setTimeout(()=> {
            const res = a+b;
            resolve(res);
        }, 3000);
    });
    
}

function taskB (a) {
    return new Promise((resovle, reject)=> {
        setTimeout(()=> {
            const res = a*2;
            resolve(res);
        }, 1000);
    });
    
}

function taskC (a) {
    return new Promise((resovle, reject)=> {
        setTimeout(()=> {
            const res = a*-1;
            resolve(res);
        }, 2000);
    });
}

taskA(5, 1).then((a_res) => {
    console.log(a_res);
    taskB(a_res).then((b_res)=>{
        console.log(b_res);
        taskC(c_res).then(()=>{
            console.log(c_res);
        });
    });
});

// 6 -> 12 -> -12


taskA(5, 1).then((a_res)=>{
    console.log(a_res);
    return taskB(a_res);
}).then((b_res)=> {
    console.log(b_res);
    return taskC(b_res);
}).then((c_res)=>{
    console.log(c_res);
})

// 6 -> 12 -> -12 이것을 then chaining 