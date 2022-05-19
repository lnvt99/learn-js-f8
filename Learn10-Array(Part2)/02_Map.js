/* MAP: trả về là 1 array */

var courses = [
    {id: 1, name: 'Javascript', coin : 0},
    {id: 2, name: 'Java', coin : 200},
    {id: 3, name: 'C#', coin : 300},
    {id: 4, name: 'Python', coin : 400},
    {id: 5, name: 'HTML - CSS', coin : 0}
];

function courseHandler(course, index, originArray) {
    // console.log(course)
    // return {
    //     id: course.id,
    //     name: `Course: ${course.name}`,
    //     coin: course.coin,
    //     status: true,
    //     index: index,
    //     originArray: originArray
    // };
    return course.name;
}
/** Fucntion courseHandler return ra type value gì thì newCourses sẽ nhận
 *      type value đó.
 */
var newCourses = courses.map(courseHandler);

console.log(newCourses)