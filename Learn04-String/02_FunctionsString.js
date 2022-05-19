/*
    Keyword: Javascript string method
    Length, Find index, Cut, Convert, Upper, Lower, 
    Trim, Split, Get a character by index
*/
var myString = "Learn Basic JavaScript";

// 1. Length
console.log(myString.length)

// 2. Find index
console.log(myString.indexOf('J'));
console.log(myString.lastIndexOf('J'));
console.log(myString.search('J')); // Hỗ trợ biểu thức chính quy

// 3. Cut string
console.log(myString.slice(12,22));
console.log(myString.slice(7));
console.log(myString.slice(-10,-1));

// 4.Replace
console.log(myString.replace('JavaScript','JS'));
console.log(myString.replace(/JavaScript/g,'JS')); // Biểu thức chính quy: Tìm tất cả chữ JavaScript

// 5. Upper - Lower
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

// 6. Trim
console.log(myString.trim())

// 7. Split
var languages = 'JS, Java, C#, Python';
console.log(languages.split(', '));

// 8. Get a character by index
const myString2 = 'Javascript ABC';
console.log(myString2.charAt(11)) 
