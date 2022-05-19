// PROMISE: 
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(() => { 
        console.log(1); 
        return sleep(1000)
    })
    .then(() => { 
        console.log(2); 
        return new Promise((resolve, reject) => {
            reject('Error');
        });
    })
    .then(() => { 
        console.log(3); 
        return sleep(1000)
    })
    .catch((error) => {
        console.log(error)
    })

