function Function_sum() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(Function_sum(20));
console.log(Function_sum(1,2,3));
console.log(Function_sum('1', '2', '3'));

var x1 = function (a, b) {
    return a * b;
}
console.log(x1(3, 5));