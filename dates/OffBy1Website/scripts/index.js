"use strict"

console.log("I am working!");

window.onload = function (){


    //get that button off the page so we can write some code that runs when it is clicked
    let theButton = document.querySelector("#theButton");

    theButton.addEventListener("click", displayTime);


}

function displayTime(){
    console.log("you clicked theButton");

    let theDate = document.querySelector("#theDate");
    let theParagraph = document.querySelector("#theParagraph")


    console.log(theDate.value)

    let generatedDate = new Date(theDate.value);

    theParagraph.innerHTML = generatedDate.toLocaleString();

}