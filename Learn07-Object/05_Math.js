/*
    MATH OBJECT
    .PI, .round(), .abs(), .ceil(), .floor(), .random(), .min(), .max()
*/

console.log(Math.abs(-4))
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
var random = Math.floor(Math.random() * 3);
var randomGame = Math.floor(Math.random() * 100);
var bonus = ['10 coin', '20 coin', '30 coin'];
console.log(bonus[random]);

if(randomGame < 5) {
    console.log('Successfull!')
}
console.log(Math.max(0,-7,99,100));

console.log(Math.min(0,-7,99,100));