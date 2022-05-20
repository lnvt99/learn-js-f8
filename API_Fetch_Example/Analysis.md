# Step 1: Get API
1. Get API by **URL** 

# Step 2: Build functions
1. Build 2 functions: getData & renderData
- getData: 
    + function parameter is callback: **function getData(callback)**
    + use fetch() to get json data from json-server: **fetch(url).then(() => return)**
    + return data:  **fetch(url).then((response) => return response.json())**
    + recall parameter callback: **.then( callback );** to call render function
- renderData:
    + get id of li by *querySelector*: **var listLangPro = document.querySelector("#list-langprog");**
    + loop json elements by map() return html code ``: **langprogs.map((langprog)=> {})**
    + use innerHTML = join('') to display its.  

# Step 3: Handling create
## NOTE: set id attribute for button create 
1. Build 2 function: handleCreateForm & createLangProg
- handleCreateForm: to get data inputed.
    + get **value** from input
    + get id of button by *querySelector*: **var createBtn = document.querySelector("#create");** 
    + when user inputted value of inputs, gather value into object: 
    **var formData = {name: name.value, year: year.value,};**
    + transfer object data into **createLangProg** function, have 2 params: *data type obj, callback*
- createLangProg: to insert data into json file.
    + Having 2 parameters: data (object), callback
    + set variable option to configure json data: method, headers and body.
    + use fetch to save data: **fetch(langprogApi, option)**, use .then method to return data **.then((response) => {response.json();})**
    + **.then(callback);**: to recall **getLangProg(renderLangProg)**
2. Next, back handleCreateForm function:
    + reuse function handleCreateForm: **createLangProg(formData, function () { getLangProg(renderLangProg);});**
    + set value of 2 inputs equal ''

# Step 4: Handling Delete
## NOTE: set id attribute for button delete 
1.  Build function: handleDeleteLangProg
- handleDeleteLangProg: to delete element in json by id
    + set variable option to configure json data: method and headers.
    + use fetch to delete element: **fetch(langprogApi+ "/" +id, option)**, use .then method to return data **.then((response) => {response.json();})**
2. Next, set condition to reload json data on HTML:
    + get element by querySelector: **var langprogID = document.querySelector(".langprog-id-" + id);**
    + if *langprogID* == true, remove it: **langprogID.remove();**

# Step 5: Hanlding Update
## NOTE: set id attribute for button update
1. Build 2 function:   handleUpdateForm & updateLangProg
- handleUpdateForm: to get object in json by id
    + insert element update into html and set attribute button
    + click update button: change name create button -> update name button
    + change all attribute of create button -> update button (id, function, style)
    + insert cancle button into html by html dom (set condition if true or false to display button)
    + when user click update button of element, fields of inputs will have value of this and get value object according to object type (use find() method), display is in console.log
    + set values input into object and update it.
    + then transfer data updateLangProg with 2 parameters: data (object) and callback.
- updateLangProg: to update data into json
    + Having 2 parameters: data (object), callback
    + set variable option to configure json data: method, headers and body.
    + use fetch to update data: **fetch(langprogApi, option)**, use .then method to return data **.then((response) => {response.json();})**
    **.then(callback);**: to recall **getLangProg(renderLangProg)**