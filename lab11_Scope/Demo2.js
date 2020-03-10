"use strict"
function foo() {
    console.log('inside foo begin:', current);
    var current = 300;
    implyGlobal = 500;
    console.log('inside foo after:', current);
    console.log('inside foo, implyglobal=', implyGlobal);
}

foo();
//console.log(current)
console.log(implyGlobal);
implyGlobal += 300;
console.log(implyGlobal);