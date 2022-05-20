// Optional Chaining(?.)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
const obj = {
    name: 'JavaScript',
    langprog: {
        name: 'Java',
        langprog2: {
            name: 'C#',
            langprog3: {
                name: 'Python',
            }
        },
    }
};
if( obj?.langprog?.langprog2?.langprog3)
{
    console.log(obj.langprog.langprog2.langprog3.name);
}

const obj2 = {
    // getName(value) {
    //     console.log(value)
    // }
}

obj.getName?.(123)