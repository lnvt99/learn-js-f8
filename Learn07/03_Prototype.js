/*
    Object Prototype - Basic
    1. Prototye: khuôn mẫu để tạo đối tượng

*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
} 
var author = new User('JavaScript', 'Basic', 'Author 01');
var user = new User('JS', 'Node-React', 'User 01');

console.log(author.className);
console.log(user.getClassName());