let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 2000)
    //resolve();
    //reject();
})
//console.log(promise);

promise
    .then(() => console.log('promise: sucess'))
    .then(() => console.log('promise: keep call'))
    .catch(() => console.log('promise: wrong'))

