// Object
var emailKey = 'email';

var myInfo = {
    name: 'JavaScript',
    year: 2023,
    [emailKey]: 'lnvthang',
    getEmail: function() {
        return this.email;
    }
};

myInfo.status = true
myInfo['bachelor'] = "abcxyz";
var myKey = 'name';
console.log(myInfo);
console.log(myInfo[myKey]);

delete myInfo.year;
console.log(myInfo);

console.log(myInfo.getEmail())

// Function --> Phương thức / method
// Others --> Thuộc tính / property