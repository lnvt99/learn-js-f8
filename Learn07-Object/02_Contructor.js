// Object contructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('JavaScript', 'Basic', 'Author 01');
var user = new User('JS', 'Node-React', 'User 01');
author.status = true;

console.log(author.getName())