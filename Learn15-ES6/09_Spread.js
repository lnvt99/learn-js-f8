function logger(a,b, ...params) {
    // console.log(params)
}
logger(1,2,3,4,5);


function logger2({name, price, ...rest}) {
    // console.log(name);
    // console.log(price);
    // console.log(rest);
}
logger2({
    name: 'JavaScript',
    price: 1999,
    description: 'Description'
});

function logger3([a, b, ...rest]) {
    // console.log(a);
    // console.log(b);
    // console.log(rest);
}
logger3([2, 6, 41, 56, 9, 0, 8]);

// Spread
var array1 = ['JavaScript', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'NodeJS'];
var array3 = [...array2, ...array1];
// console.log(array3);

var obj1 = {
    name: 'JavaScript'
};

var obj2 = {
    price: 1999
};

var obj3 = {
    ...obj1,
    ...obj2
}

// console.log(obj3);

var defaultConfig = {
    api: 'https://abc-xyz',
    apiVersion: 'v1',
    other: 'other',
};

var exerciseConfig = {
    ...defaultConfig,
    api: 'https:zyx-cba'
}

// console.log(exerciseConfig);

var array4 = ['JavaScript', 'PHP', 'Ruby'];

function logger(...rest) {
    for (let index = 0; index < rest.length; index++) {
        const element = rest[index];
        console.log(element)
    }
}

logger(...array4);