// PROMISE: promise.resolve - promise.reject - promise.all 

var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1]);
    }, 1000)
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2,3]);
    },2000)
});

Promise.all([promise1, promise2])
    .then(([promise1, promise2]) => {
        console.log(promise1.concat(promise2));})
    .catch((error) => { console.log(error)});