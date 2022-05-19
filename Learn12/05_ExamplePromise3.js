// PROMISE: promise.resolve - promise.reject - promise.all 

// var promise = new Promise((resolve, reject) => {
    /** LOGIC */
    // resolve('Success!');
//     reject('Error!');
// });

var promise = Promise.resolve('Success!');

promise
    .then((output) => {
        console.log(output);
    })
    .catch((error) => {
        console.log(error);
    });

