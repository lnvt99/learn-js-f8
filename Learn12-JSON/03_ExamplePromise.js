// PROMISE
var promise = new Promise( 
    function(resolve, reject) { 
        resolve();
});

// Then đầu tiên return giá trị gì thì then thứ 2 sẽ làm tham số đó
promise
    .then(() => {
       return new Promise((resolve) => {
           setTimeout(() => {
               resolve([1,2,3]);
           }, 3000);
       })
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Done');
    })

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
        return sleep(1000)
    })
    .then(() => { 
        console.log(3); 
        return sleep(1000)
    })