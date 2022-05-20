var langprogApi = 'http://localhost:3000/courses';


var listLangPro = document.querySelector('#list-langprog');

function start(){
    getLangProg(function(course) {
        console.log(course)
    });
}

start();

// Functions
function getLangProg(callback) {
    fetch(langprogApi)
        .then((response) => { return response.json(); })
        .then( callback )
}