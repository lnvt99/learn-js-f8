// Fetch: Lấy dữ liệu từ phía Back-end trả về
// API(Application programing interface - URL): cổng giao tiếp giữa các software
// Backend -> API -> Fetch -> JSON/XML
// Link fake API: 
//  https://jsonplaceholder.typicode.com/
//  https://jsonplaceholder.typicode.com/posts

var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then((response) => {
        return response.json();
        // JSON.parse: JSON -> JavaScript
    })
    .then((post) => {
        console.log(post)
    })
    .catch((error) => {
        console.error('Error');
    })

