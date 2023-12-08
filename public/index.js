"use strict";
let a = 8;
let b = 20;
const isAgreaterThanB = () => {
    if (a > b) {
        return "Yes, A is greater than B";
    }
    else {
        return "No, A is not greater than B";
    }
};
let result = isAgreaterThanB();
console.log(result);
