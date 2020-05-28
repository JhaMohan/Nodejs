const p = new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(1); // pending => resolve
    reject(new Error('error message')); // pending => rejected
},2000);
});


p
.then(result => console.log('Result',result))
.catch(err => console.log('Error',err.message));