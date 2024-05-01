"use strict"

function convertCtoF(someTemp){

    //setup variables for farenheight to celcius
    let celsius = someTemp;
    let fahrenheit = (celsius * 9 / 5) + 32;

    //return the value of the calc as output from the function
    return fahrenheit;

}

console.log("converting 100 from F to C: " + convertCtoF(100) );
console.log("converting 45 from F to C: " + convertCtoF(45) );
console.log("converting 19 from F to C: " + convertCtoF(19) );
console.log("converting 0 from F to C: " + convertCtoF(0) );
console.log("converting -7 from F to C: " + convertCtoF(-7) );
console.log("converting -40 from F to C: " + convertCtoF(-40) );