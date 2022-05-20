var langprogApi = "http://localhost:3000/courses";

const name = document.querySelector('input[name="name"]');
const year = document.querySelector('input[name="year"]');
const createBtn = document.querySelector("#create");
var statusBtnCancle = true;
function start() {
  getLangProg(renderLangProg);
  handleCreateForm();
}

start();

// Functions
function getLangProg(callback) {
  console.log(callback);
  fetch(langprogApi)
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then(callback);
}

function renderLangProg(langprogs) {
  console.log(langprogs)
  var listLangPro = document.querySelector("#list-langprog");
  var htmls = langprogs.map((langprog) => {
    return `<li class = "langprog-id-${langprog.id}">
                <h4>${langprog.name}</h4>
                <p>${langprog.year}</p>
                <button onclick="handleDeleteLangProg(${langprog.id})">Xoá</button>
                <button onclick="handleUpdateLangProg(${langprog.id})">Sửa</button>
</li>`;
  });
  listLangPro.innerHTML = htmls.join('');
}

function handleCreateForm() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    var formData = {
      name: name.value,
      year: year.value,
    };
    createLangProg(formData, function () {
      getLangProg(renderLangProg);
    });
    name.value = '';
    year.value = '';
  };
}

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

function createLangProg(data, callback) {
  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  };
  fetch(langprogApi, option)
    .then((response) => {
      response.json();
    })
    .then(callback);
}

function handleDeleteLangProg(id) {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  };
  fetch(langprogApi + "/" + id, option)
    .then((response) => {
      response.json();
    })
    .then(function () {
      var langprogID = document.querySelector(".langprog-id-" + id);
      if (langprogID) {
        langprogID.remove();
      }
    });
}

function handleUpdateLangProg(id) {
    createBtn.innerHTML = 'Update';
    if(statusBtnCancle)
    {
        const node = document.createElement("button");
        const textnode = document.createTextNode("Cancle");
        node.appendChild(textnode);
        document.getElementById("list-btn").appendChild(node);
        node.setAttribute("id","cancleBtn");
        node.setAttribute("onClick","cancleFunction()");
        statusBtnCancle = false;
    }
    fetch(langprogApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        var langprogFindID = data.find((langprog) => {
            return langprog.id === id;
        })
        name.value = langprogFindID.name;
        year.value = langprogFindID.year;
        console.log(langprogFindID);
    })
   
}

function cancleFunction(){
  createBtn.innerHTML = 'Create';
  var elementCancleBtn = document.getElementById('cancleBtn');
  elementCancleBtn.remove();
  statusBtnCancle = true;
}

