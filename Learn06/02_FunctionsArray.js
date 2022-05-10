/** Keyword: Javascript array method
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

var languages = ["Javascript", "Java", "C#", "Python"];

// 1.To string
console.log(languages.toString());

// 2. Join
console.log(languages.join(" - "));

// 3. Pop
console.log(languages.pop()); // Xoá element cuối mảng và trả về phần tử đã xoá

// 4. Push
console.log(languages.push("Dart")); // Thêm phần tử vào cuối mảng và trả về là độ dài của mảng

// 5. Shift
console.log(languages.shift()); // Xoá element đầu mảng và trả về phần tử đã xoá

// 6. Unshift
console.log(languages.unshift()); // Thêm phần tử vào đầu mảng và trả về là độ dài của mảng

// 7. Splicing
console.log(languages.splice(1, 1)); // Xoá phần tử bắt đầu tại vị trí mình đặt
console.log(languages.splice(1, 1, "Dart", 'PHP')); // Xoá phần tử bắt đầu tại vị trí mình đặt, sau đó chèn element mới

// 8. Concat
console.log(languages.concat(languages)); // Nối array

// 9. Slicing
console.log(languages.slice(0));
languages.lastIndexOf()