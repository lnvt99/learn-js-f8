var courses = [
    {id: 1, name: 'Javascript', coin : 0},
    {id: 2, name: 'Java', coin : 200},
    {id: 3, name: 'C#', coin : 300},
    {id: 4, name: 'Python', coin : 400},
    {id: 5, name: 'HTML - CSS', coin : 0}
];

var totalCoin = courses.reduce((total, course) => {
    return total + course.coin;
},0); //Giá trị khởi tạo không bắt buộc, nêu không có thì lấy giá trị I để khởi tạo

// console.log(totalCoin);

// Example 1: flat Array
var depthArr = [1,2,[3,4],5,6,[7,8,9]];
var flatArr = depthArr.reduce((flatOutput, depthItem) => {
    return flatOutput.concat(depthItem);
}, []);
// console.log(flatArr);

// Example 2: 
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title:'HTML - CSS'
            },
            {
                id: 2,
                title:'JavaScript'
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 1,
                title:'C#'
            },
            {
                id: 2,
                title:'Java'
            }
        ]
    }
]

var newCourses = topics.reduce((courses, topic) => {
    return courses.concat(topic.courses);
}, []);

console.log(newCourses);
