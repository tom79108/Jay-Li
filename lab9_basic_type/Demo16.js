var n1 = 123456
var n2 = new Number(123456);
console.log(typeof n1, typeof n2);
console.log(n1 == n2);
console.log(n1 === n2);

function echoMe(name) {
    console.log("echo name:", name);
}

echoMe("Tom");
echoMe();
echoMe(undefined);
echoMe(null);
echoMe('p', 'q', 'r');
echoMe(['p', 'q', 'r']);