var token = 'abc';
var y = function () {
    var token = 'def';
    console.log('In Function:', token);
}

console.log('Out Function First:', token);
y();
console.log('Out Function Sec:', token);

var x1 = function (x, y) {
    return x * y;
}
var x2 = (x, y) => { return x * y; };
var x3 = (x, y) => x * y;
var x4 = (x, y) => x - y > 0 ? "T" : "F";

console.log(x1(3, 4));
console.log(x2(6, 7));
console.log(x3(8, 9));
console.log(x4(8, 9));