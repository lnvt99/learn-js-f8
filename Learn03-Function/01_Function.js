/* 
    FUNCTION
*/
function isStatus() {
    console.log('This is Function!');
}

isStatus();

function showMessage() {
    function showMessage2() {
        console.log("Message 2");
    }
    showMessage2();
}
showMessage();