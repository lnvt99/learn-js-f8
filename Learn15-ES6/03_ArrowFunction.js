// 2. Arrow function: không thể tạo contructor, không được tạo hàm trong object
// myLog(() => {})

const sum = (a,b) => a + b;
const sum2 = (a,b) => {
    return {
        a: a,
        b: b,
    }
}

const sum3 = (a,b) => ({ a:b, b:a});

const logger = log => console.log(log);
logger('Message!')
console.log(sum(2,2));
console.log(sum2(4,6));
console.log(sum3(1,2));