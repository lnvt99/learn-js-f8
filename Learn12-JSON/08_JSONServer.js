/**
    JSON Server: theo tiêu chuẩn REST API giao thức dựa trên phương thức hoạt động POST - GET - PUT / PATCH - DELÊT
_ Fake API Server / mock API: npm install third library 
_ Postman
*/

var courseApi = 'url';

fetch(courseApi)
    .then((response) => { return response.json(); })
    .then((course) => { console.log(course); });



