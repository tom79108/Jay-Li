var process = require('process');
console.log(process.cwd());
var fs = require('fs');
console.log("Program start");
var data = fs.readFileSync('Data\\info.txt');
console.log(data.toString());
console.log("Program terminated");