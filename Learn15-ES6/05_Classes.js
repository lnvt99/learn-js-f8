// 5. Classes

class Course {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}

const jsCourse = new Course('JavaScript', 10000);
const csharpCourse = new Course('C#',999);

console.log(jsCourse);
console.log(csharpCourse);
