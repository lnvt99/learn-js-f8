/* CALLBACK
_ Là 1 hàm
_ Được truyền qua đối số
_ Được sử dụng lại
*/

function myFunction(){
    myCallBack1(myCallBack2)
}
myFunction()
function myCallBack1(callback){
    callback;
}

function myCallBack2(){
    console.log(123)
}
