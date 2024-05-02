"use strict"

//THINK OF THIS AS FINDING THE FIRST NAME
// returns all characters before the :
function getSuppler(code){

 return code.substring(0, code.indexOf(":"));

}

//THINK OF THIS AS FINDING THE MIDDLE NAME
// returns all characters between the : and -
function getProductNumber(code){

    return code.substring(code.indexOf(":")+1, code.indexOf("-"));

}

//THINK OF THIS AS FINDING THE LAST NAME
//that returns all characters after the -
function getSize(code){

    return code.substring(code.indexOf("-")+1);

}

let code = "ACME:123-L";

console.log(
    " Supplier code: "+getSuppler(code),
    "Product code: "+getProductNumber(code),
    "Size: "+ getSize(code)
);