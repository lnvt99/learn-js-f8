/* 
    PROMISE (Multithreading)
- Sync (Synchronous)
- Async (Asynchronous)
- setTimeout / setInterval / fetch / xmlhttprequest 
     reading file / request animation frame
*/

// Callback hell: gọi function callback liên tục, trong callback có callback
// Memory leak
// Có 3 trạng thái: Pending - Fulfilled - Rejected
// Được sinh ra để xử lí  thao tác bất đồng bộ, trước khhi có promise thường sử dụng callback
//      nhưng lại gặp vấn đề callback hell, code khó nhìn, khó hiểu và bị sâu
//  ES6, promise để khắc phụ tình trạng callback hell, khắc phục tình trạng trên
var promise = new Promise( 
    function(resolve, reject) { // Executor
    //Logic  - thành công: resolve() | then - thất bại: reject() | catch
        resolve([
            { id: 1, name: 'JavaScript'}
        ]);
});

promise
    .then((course) => {
        console.log(course);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('Done');
    })