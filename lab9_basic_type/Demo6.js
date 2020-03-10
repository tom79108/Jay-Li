console.log('### One ###');
var condition = NaN
if (condition) {
    console.log('return true');
} else {
    console.log('return false');
}
console.log('===================');
console.log('### Two ###');
var conditionList = [0, "", NaN, null, undefined];
console.log('type of elements:', typeof conditionList, Array.isArray(conditionList));
console.log('===================');
console.log('### Three ###');
conditionList.forEach(evalate);

function evalate(value, index, array) {
    if (value) {
        console.log(index, value, 'return true');
    } else {
        console.log(index, value, 'return false');
    }
}
console.log('===================');
console.log('### Four ###');
conditionList.forEach((value, index, array) => {
    if (value) {
        console.log(index, value, 'return true');
    } else {
        console.log(index, value, 'return false');
    }
});