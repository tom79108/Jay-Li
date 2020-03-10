var a1=['a', 'b', 'c', 'd', 'e', 'f'];
var a2=Array.from("abcdef");
var a3="abcdef".split("");
var a4=[];
a4.push('a');
a4.push('b');
a4.push('c');
a4.push('d');
a4.push('e');
a4.push('f');
console.log("a1:\n\t",a1,Array.isArray(a1));
console.log("a2:\n\t",a2,Array.isArray(a2));
console.log("a3:\n\t",a3,Array.isArray(a3));
console.log("a4:\n\t",a4,Array.isArray(a4));
// push, pop
console.log(a1.pop(), a1)
a1.push('G')
console.log(a1)
console.log(a2.shift(), a2)
a2.unshift('A')
console.log(a2)