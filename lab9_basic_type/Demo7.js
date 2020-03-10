var x1 = 'pqrst';
var x2 = "pqrst";
console.log('X1', x1, x1.length);
console.log('X2', x2, x2.length);

// var x3;
// console.log('X3', x3, x3.length);

var StrSplit = "abcdefg1234567中文輸入也沒有問題";
StrSplit.split('').forEach((e) => {
    console.log('*', e);
})