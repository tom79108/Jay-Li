"use strict";
console.log(x1);
// console.log(x2);
var x1 = "Hello ";
x2 = "world";
console.log(typeof x1, typeof x2)
console.log(x1, x2)
function printMessage() {
    console.log( 'inside printmessage',x1, x2)
}
printMessage()