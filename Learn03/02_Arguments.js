/*
    ARGUMENTS

*/

function writeLog(message) {
    console.log('This is log: ' + message); // message là tham số: định nghĩa
}

writeLog('text'); // text là đối số: khi truyền dữ liệu vào

function writeLog2() {
    console.log(arguments)
    for (var param of arguments) {
        console.log(param)
    }
}
writeLog2('Log 1', 'Log 2', 'Log 3');