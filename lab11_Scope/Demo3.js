var x1 = 100;
x2 = 200;
console.log(x1, x2);
console.log(global.x1, global.x2)
delete global.x1
delete global.x2
console.log(x1, x2);