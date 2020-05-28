
const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('async call 1........')
        resolve(1);
    },2000);
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('async call 2..........')
        resolve(2);
    },4000);
})


// Promise.all([p1,p2])    // it will execute when all the promise will resolve
//      .then(result => console.log(result))
//      .catch(err => console.log(err.message));

Promise.race([p1,p2])    // it will execute when any of the the promise will resolve
     .then(result => console.log(result))
     .catch(err => console.log(err.message));