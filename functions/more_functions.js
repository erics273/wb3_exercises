"use strict"

function displayMailingLabel(name, address, city, state, zip){

    console.log(name);
    console.log(address);
    console.log(`${city}, ${state} ${zip}`);
    
    //this is how you would do this with string concatenation
    // console.log(city + ", " + state + " " + zip);

}

function addNumbers(num1, num2){

    let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);

}

function displayReceipt(totalDue, amountPaid){

    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);
    
    let result = amountPaid - totalDue;

    if(result >= 0){
        console.log(`Change Due: $${result}`)
    }else{
        console.log(`Remaining Balance: $${Math.abs(result)}`);
    }

}





//use the above functions
console.log("running displayMailingLabel:")
displayMailingLabel("eric", "1234 Easy Street", "Fort Myers Beach", "FL", "33931" );
//console log for spacing in output
console.log("");
displayMailingLabel("Chanda", "1234 Lazy Way", "Fort Myers Beach", "FL", "33931" );

//console log for spacing in output
console.log("");

console.log("running addNumbers:")
addNumbers(5, 5);
//console log for spacing in output
console.log("");
addNumbers(9, 300);

//console log for spacing in output
console.log("");

console.log("running displayReceipt:")
displayReceipt(5.00, 6.00);
//console log for spacing in output
console.log("");
displayReceipt(5.00, 4.00);
console.log("");
displayReceipt(5.00, 5.00);