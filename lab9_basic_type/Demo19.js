var x1 = [null, undefined, 0, false, "", NaN];
x1.forEach(e => console.log(e ? "true" : "false"));

var x2 = [1, 3, 5, 7, 9, 2, 4, 6, 8]
for (index in x2) {
    console.log('index = ', index, 'value = ', x2[index]);
}

for (item of x2) {
    console.log('value=', item);
}

var x3 = {
    courseName: "NoJS",
    duration: 14,
    location: "Taipei"
}

for (k in x3) {
    console.log(k, "/", x3[k]);
}