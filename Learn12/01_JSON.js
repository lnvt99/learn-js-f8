/* 
1. Event listeners
2. JSON
3. Promise 
4. Fetch
5. DOM location
6. Local Storage
7. Session Storage
8. Coding convention
9. Best practice
10. Mistakes
11.Performance
*/

/* 
    JSON: 
- Là 1 định dạng dữ liệu (chuỗi) - JavaScript Object Notation
- Mã hoá (Encode) Stringify: JS-> JSON - Giải mã (Decode) Parse: JSON -> JS 
- Number, String, Boolean, Null, Array, Object
*/
var myJSON = '{"name":"JSON","year":"2022"}';
var myJSON2 = '1';
console.log(typeof JSON.parse(myJSON2));
console.log(JSON.parse(myJSON));
console.log(JSON.stringify(['Javascript', 'Java', 'C#']));
