/* 
    CALLBACK 
1. Là hàm
2. Được truyền qua đối số
3. Được gọi lại (trong hàm nhận đối số)
*/

function myFunction(param) { // param là myCallback
    if(typeof param === 'function') param('Learning Basic JavaScript');
}
function myCallback(value) {
    console.log('Value: ' + value);
}
myFunction(myCallback)

// Example 


var courses = ['JavaScript', 'Java','C#']
function myFunction2(param) { // param là myCallback
    if(typeof param === 'function') param(courses);
}
function myCallback2(value) {
    for(var i = 0; i < courses.length; i++)
    {
        console.log(value[i]);
    }
}
myFunction2(myCallback2)