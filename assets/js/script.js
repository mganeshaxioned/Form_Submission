// Array to Store Data
let myArr = [];

// Grabbing Container to add ul into it
let displayContainer = document.querySelector(".display");

// Grabbing Buttons
let submitBtn = document.getElementById("Submit");
let cancelBtn = document.getElementById("cancel");

// Grabbing Details
let firstNameData = document.querySelector(".firstName");
let lastNameData = document.querySelector(".lastName");
let genderData = document.querySelectorAll("input[name='gender']");
let addressData = document.querySelector(".address");
let termsData = document.querySelector("#terms");

// Validating firstname,lastname , address , terms & condition and  gender
let validFirstName = false, validLastName = false, validAddress = false, validGender = false, validTerms= false;


// function for validating FirstName and Last Name
function validateName(name, message) {
    let firstNameregex = /^[a-zA-z]([a-zA-z\s]){2,14}$/;
    let firstName = name.value;
    let inputBox = name.parentElement;
    let nameSpanElement = document.createElement("span");// creating span and adding it inside input box
    inputBox.appendChild(nameSpanElement);
    let nameSpan = inputBox.querySelector("span");

    function spanModify(spanErrorMessage){
        name.classList.add("red-border");
        name.classList.remove("green-border");
        nameSpan.style.display = "block";
        nameSpan.setAttribute("class", "red-text");
        nameSpan.textContent = message + spanErrorMessage;
        validFirstName = false;
    }

    if (firstName === "") {
        spanModify( " Cannot be empty.");
    }else if (firstNameregex.test(firstName)) {
        name.classList.add("green-border");
        name.classList.remove("red-border");
        inputBox.removeChild(nameSpan);
        validFirstName = true;
    }else {
        spanModify(" should be between 3 to 15 character and should not start with Number.");
    }
}
// Function for validating LastName 
function validateLastName(name, message) {
    let firstNameregex = /^[a-zA-z]([a-zA-z\s]){2,14}$/;
    let firstName = name.value;
    let inputBox = name.parentElement;
    let nameSpanElement = document.createElement("span");// creating span and adding it inside input box
    inputBox.appendChild(nameSpanElement);
    let nameSpan = inputBox.querySelector("span");

    if (firstName === "") {
        name.classList.add("red-border");
        name.classList.remove("green-border");
        nameSpan.style.display = "block";
        nameSpan.setAttribute("class", "red-text");
        nameSpan.textContent = message + " Cannot be empty.";
        validLastName = false;
    }else if (firstNameregex.test(firstName)) {
        name.classList.add("green-border");
        name.classList.remove("red-border");
        inputBox.removeChild(nameSpan);
        validLastName = true;
    }else {
        name.classList.add("red-border");
        name.classList.remove("green-border");
        nameSpan.style.display = "block";
        nameSpan.setAttribute("class", "red-text");
        nameSpan.textContent = "Name should be between 3 to 15 character and should not start with Number.";
        validLastName = false;
    }
}
// Function for validating Gender
function validateGender(){
    let femaleCheckbox = document.getElementById("female");
    let genderSpanElement = document.createElement("span");
    let genderButtons = femaleCheckbox.parentElement;// Grabbing parent element of radio buttons 
    genderButtons.appendChild(genderSpanElement);
    let genderSpan = genderButtons.querySelector("span");
    if(genderData[0].checked == true || genderData[1].checked == true){
        validGender = true;
        genderButtons.removeChild(genderSpan);
    }else{
        validGender = false;
        genderSpan.style.display = "block";
        genderSpan.classList.add("red-text");
        genderSpan.textContent = "Please Select your Gender"; 
    }
}
// Function for validating Address
function validateAddress() {
    let regex = /^[a-zA-z]([0-9a-zA-z\s\,\:\.]){2,149}$/
    let address = addressData.value;
    let inputBox = addressData.parentElement;
    let  addressSpanElement = document.createElement("span");
    inputBox.appendChild(addressSpanElement);
    let addressSpan = inputBox.querySelector("span");

    if(address === "") {
        addressData.classList.add("red-border");
        addressData.classList.remove("green-border");
        addressSpan.style.display = "block";
        addressSpan.setAttribute("class", "red-text");
        addressSpan.textContent = "Address Cannot be empty.";
        validAddress = false;

    }else if(regex.test(address)) {
        // Adding and removing class for Border Color
        addressData.className = "green-border";
        addressData.classList.remove("red-border");
        inputBox.removeChild(addressSpan);
        validAddress = true;
    }else {
        // Adding and removing class for Border Color
        addressData.classList.add("red-border")
        addressData.classList.remove("green-border")
        addressSpan.style.display = "block";
        addressSpan.setAttribute("class", "red-text");
        addressSpan.textContent = "Address should be between 3 to 150 character & can only use (. , :) symbols.";
        validAddress = false;
    }
}
//Function for validating Terms and Conditions
function validateTermsAndCondition() {
    let inputBox = termsData.nextElementSibling;
    let termSpanElement = document.createElement("span");
    inputBox.appendChild(termSpanElement);
    let termSpan = inputBox.querySelector("span");

    if(termsData.checked == true){
        validTerms = true;
        inputBox.removeChild(termSpan);
    }else{
        validTerms = false;
        termSpan.style.display = "block";
        termSpan.classList.add("red-text")
        termSpan.textContent = "Please Accept the Terms and Condition";
    }
}
// validation Completed Here==============================
// Function to reset radiobox
function removeRadioSign(){
    if(genderData[0].checked == true || genderData[1].checked == true){
        genderData[0].checked = false;
        genderData[1].checked = false;
    }
}
// Function to reset Checkbox
function removeCheckboxSign(){
    if(terms.checked == true){
        terms.click();
    }
}
// Function for Changing Border color After Submmitting
function borderColor() {
    firstNameData.classList.remove("green-border");
    firstNameData.classList.add("border");
    lastNameData.classList.remove("green-border");
    lastNameData.classList.add("border");
    addressData.classList.remove("green-border");
    addressData.classList.add("border");
}
//Function to  Reset The Form
function formReset() {
    firstNameData.value = "", lastNameData.value = "", addressData.value = "";
}
// function for storing Data
function data() {
    let genderData = document.querySelector('input[name = "gender"]:checked');
    if (genderData) {
        var genderValue = genderData.value;
    }
    let objData = {
        name: firstNameData.value.trim(),
        surname: lastNameData.value.trim(),
        gender: genderValue,
        address: addressData.value.trim(),
    };
    // adding datas into Array
    myArr.push(objData);
    borderColor(); //For Bringing Border color back to normal color
    formReset();
}
//Function to display data
function display() {
    let ul = document.createElement("ul");
    ul.className = "display-box";
    // creating li     
    for (key in myArr[myArr.length - 1]) {
        let li = document.createElement("li");
        li.textContent = myArr[myArr.length - 1][key];
        ul.appendChild(li);
    }
    // Creating Edit Li
    let editli = document.createElement("li");
    let editBtn = document.createElement("button");
    editBtn.setAttribute("title", "Edit");
    editBtn.setAttribute("class", "btn");
    editBtn.textContent = "Edit";
    editli.appendChild(editBtn);
    ul.append(editli);
    let deleteli = document.createElement("li");
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("title", "Button");
    deleteBtn.setAttribute("class", "btn");
    deleteBtn.textContent = "Delete";
    deleteli.appendChild(deleteBtn);
    ul.append(deleteli);
    displayContainer.appendChild(ul);

    // adding click event to Delete button and edit Button
    deleteli.addEventListener("click", deleteSelectedRow);
    editli.addEventListener("click",editSelectedRow)
}
// Adding event Listener to Submit Button
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    
    validateName(firstNameData, "First Name"); // validatefirst Name   
    validateLastName(lastNameData, "Last Name"); // validate last Name
    validateAddress(); // validating address
    validateGender(); // Validating Gender
    validateTermsAndCondition();  // validating Terms and Condition
    if (validFirstName && validLastName && validAddress && validGender && validTerms) {
        data();
        display();
        removeRadioSign();
        removeCheckboxSign();
    }
})
// add event Listener on cancel Button
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let span = genderData[1].nextElementSibling.nextElementSibling;
    let termsErrorMessage = termsData.nextElementSibling.querySelector("span");
    formReset();
    borderColor();
    removeRadioSign();
    removeCheckboxSign();
    if(firstNameData.nextElementSibling != null || lastNameData.nextElementSibling != null || addressData.nextElementSibling != null || span != null || termsErrorMessage != null){
        firstNameData.classList.remove("red-border");
        lastNameData.classList.remove("red-border");
        addressData.classList.remove("red-border");
        firstNameData.nextElementSibling.style.display = "none";
        lastNameData.nextElementSibling.style.display = "none";
        addressData.nextElementSibling.style.display = "none";
        span.style.display = "none";
        termsErrorMessage.style.display = "none";
    }
})
// Delete Row
function deleteSelectedRow(){
    let displayBox = displayContainer.children, emptyArr = [];
    for(let i=0; i<displayBox.length; i++){   //iterating ul and adding it inside array
        emptyArr.push(displayBox[i]);
    }
    for (var i = 0; i < displayBox.length; i++) { // iterating ul and grabbing index of the the ul and splicing it 
        displayBox[i].onclick = function () {
        var index = emptyArr.indexOf(this); // grabbing index of displayBox[i]
            if(index > 0){
                myArr.splice(index, 1);;
                var ulRemove = document.querySelector(".display");
                ulRemove.removeChild(ulRemove.children[index]);
            }
        }
    }
}
// Function the Edit Button of li
function editSelectedRow(){
    let displayBox = displayContainer.children, editArray = [];
    for(let i=0;i<displayBox.length; i++){
        editArray.push(displayBox[i]);
    }
    for(let i=0; i<displayBox.length; i++){
        displayBox[i].onclick =function(){
             let index = editArray.indexOf(this);
             if(index > 0){
                let ulArray = [];// array to store the values of a single ul
                // iterating ul
                for(key in myArr[index - 1]){
                    ulArray.push(myArr[index - 1][key]);
                }
                let firstName = document.querySelector("#firstName");
                let lastName = document.querySelector("#lastName");
                let genderArr = document.querySelectorAll("input[name='gender']")
                let address = document.querySelector("#address");
                // Adding values in inputs
                firstName.value = ulArray[0], lastName.value = ulArray[1];                
                if(ulArray[2] === "Male"){// gender iteration
                    genderArr[0].checked = true;
                }else{
                    genderArr[1].checked = true;
                }
                address.value = ulArray[3];
                myArr.splice(index -1, 1); // removing from main array
                let editUl = document.querySelector(".display");
                editUl.removeChild(editUl.children[index]);
             }
        }
    }
}
