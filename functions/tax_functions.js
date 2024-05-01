"use strict"

function getSocSecTax(grossPay){

    let withheldAmount = grossPay * (6.2 / 100);
    return withheldAmount;

}

function getMedicareTax(grossPay){

    let withheldAmount = grossPay * (1.45 / 100);
    return withheldAmount;

}

function getFederalTax(grossPay, code) {

    let taxRate = 0;
    if(code === 0){
        taxRate = 23 / 100;
    }
    else if(code === 1){
        taxRate = 21 / 100;
    }
    else if(code === 2){
        taxRate = 19.5 / 100;
    }
    else if(code === 3){
        taxRate = 18.5 / 100;
    }
    else if(code >= 4){
        taxRate = .18-((code - 4) * .005);
    }

    let withheldAmount = grossPay * taxRate;
    return withheldAmount;

}

let grossPay = 72963.59
let code = 0;

console.log("Social Security Tax on $" + grossPay + " gross pay: $" + getSocSecTax(grossPay).toFixed(2));
console.log("Medicare Tax on $" + grossPay + " gross pay: $" + getMedicareTax(grossPay).toFixed(2));
console.log("Federal Tax on $" + grossPay + " gross pay with a code of " + code + ": $" + getFederalTax(grossPay, code).toFixed(2));