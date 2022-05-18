/* 
    REDUCE: nhận giá trị duy nhất sau khi tính toán
*/

var courses = [
    {id: 1, name: 'Javascript', coin : 0},
    {id: 2, name: 'Java', coin : 200},
    {id: 3, name: 'C#', coin : 300},
    {id: 4, name: 'Python', coin : 400},
    {id: 5, name: 'HTML - CSS', coin : 0}
];

var i =0;

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    i++;
    var totalCoin = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy: ': i,
        'Biến tính trữ: ': accumulator,
        'Giá khoá học: ': currentValue.coin,
        'Tổng tiền: ': totalCoin
    });
    // console.log(currentValue);
    // return 100; //lượt I là số 0, lượt sau nhận được giá trị return
    return totalCoin;
}

var totalCoin = courses.reduce(coinHandler, 0); // Initialize, accumulator = 0

console.log(totalCoin)
