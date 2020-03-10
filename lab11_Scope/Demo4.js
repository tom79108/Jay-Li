function varmethod() {
    var varX = 200;
    console.log("beginning, x=", varX);
    if (true) {
        var varX = 100;
        console.log("inside, x=", varX);
    }
    console.log("outside, x=", varX);
}
function globalvarmethod() {
    var varX = 200;
    console.log("beginning, x=", varX);
    if (true) {
        varX = 100;
        console.log("inside, x=", varX);
    }
    console.log("outside, x=", varX);
}

function letmethod() {
    let lety = 30;
    console.log("beginning, y=", lety);
    if (true) {
        let lety = 50;
        console.log("inside, y=", lety);
    }
    console.log("outside, y=", lety);
}

varmethod();
console.log("-------------------------------");
globalvarmethod();
console.log("-------------------------------");
letmethod();