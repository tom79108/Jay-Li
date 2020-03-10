var a1 = [1, 2, 3, 4, 5, 6, 7, 8];
var r1 = a1.join();
console.log(typeof r1, r1);
var a2 = ['red', 'yellow', 'blue'];
var r2 = a2.join();
console.log(typeof r2, r2);
var r3 = a2.join("-");
console.log(r3);
var a3 = ['www', 'uuu', 'com', 'tw'];
var r4 = a3.join('.');
console.log(r4);
var Array4 = Array.from('HelloWorld');
console.log(Array4.sort());
var sum = 0;
a1.forEach(function (element) { sum += element }, this)
console.log("summation of a1=", sum)