// constants for query selector
//===================  Data Selectors ===================
const colorNumber = document.querySelector("#customNumber");
const colorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelectBox = document.querySelector("#imageSelect");
const images = document.querySelector("#images");

//===================   CSS Selectors  ==================
const htmlFile = document.querySelector("html");

// console.log(`${colorNumber.value}`);
// function to change bg color from user input and add student id
function changeCustomColor(inputColor) {

    if (inputColor < 0 || inputColor > 100){
        htmlFile.style.backgroundColor = "#ff0000";//Red
    }
    else if (inputColor >= 0 && inputColor <= 20){
        htmlFile.style.backgroundColor = "#3cb371";//Green
    }
    else if (inputColor > 20 && inputColor <= 40){
        htmlFile.style.backgroundColor = "#0000ff";//Blue
    }
    else if (inputColor > 40 && inputColor <= 60){
        htmlFile.style.backgroundColor = "#ffa500";//Orange
    }
    else if (inputColor > 60 && inputColor <= 80){
        htmlFile.style.backgroundColor = "#6a5acd";//Purple
    }
    else if (inputColor > 80 && inputColor <= 100){
        htmlFile.style.backgroundColor = "#ffff47";//Yellow
    }
    return inputColor;
}

// function to change bg color from random no.
function changeRandomColor() {
    var data = Math.floor(Math.random() * 100) + 1;//Randomize the data
    changeCustomColor(data); //Use the if statements from the first function
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    if (imageSelectBox.length < 6) {
        const imageArray = ["./img/img1.jpg","./img/img2.jpg","./img/img3.jpg","./img/img4.jpg","./img/img5.jpg"];
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
        for (let i = 0; i < imageArray.length; i++) {
            var option = document.createElement("option");
            option.value = i; 
            option.text = "IMG " + (i + 1);
            imageSelectBox.appendChild(option);
        }
    }
}

// function to change image
function changeImage() {
    if (imageSelectBox.value == 0) {
        images.setAttribute("src", "./img/img1.jpg");
    } 
    else if (imageSelectBox.value == 1) {
        images.setAttribute("src", "./img/img2.jpg");
    } 
    else if (imageSelectBox.value == 2) {
        images.setAttribute("src", "./img/img3.jpg");
    } 
    else if (imageSelectBox.value == 3) {
        images.setAttribute("src", "./img/img4.jpg");
    } 
    else if (imageSelectBox.value == 4) {
        images.setAttribute("src", "./img/img5.jpg");
    }
}

// event listeners for on click event of buttons and select
// colorNumber.addEventListener("click",);
colorButton.addEventListener("click",function(){
    var inputColor = colorNumber.value //declare the variable to the input from the user
    changeCustomColor(inputColor); //Use the if statements from the first function
});
randomColorButton.addEventListener("click",changeRandomColor);
// event listeners for on change event of select
imageSelectBox.addEventListener("click", addList);
imageSelectBox.addEventListener("change", changeImage);