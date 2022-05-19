/*
    ARRAY
*/
var languages = ['Javascript', 'Java', 'C#', 'Python'];
var languagesArr = new Array(
    'English', 'Dutch', 'Chinese', 'Japan'
);
console.log(languages.length);
// Không dùng type of vì return là object
console.log(Array.isArray(languagesArr));