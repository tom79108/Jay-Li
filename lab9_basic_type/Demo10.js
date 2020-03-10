var o1 = {}
var o2 = {
    name: "NodeJS", duration: 14, period: ["Monday", "Tuesday"]
}
var o3 = {}
o3["name"]="POOP";
o3["duration"]=14;
console.log("Before Delete\r",o2.duration,o3.duration);
delete o3.duration;
console.log("After Delete\r",o2.duration,o3.duration);
o3["duration"]=35;
o3["period"]=["Saturday","Sunday"];
console.log(typeof o1, typeof o2, typeof o3);
console.log("o1:",o1,"\ro2:",o2,"\ro3",o3)
console.log("Before Delete Name:");
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)
delete o3.name
console.log("Delete o3 Name:");
console.log(o2.name,o3.name)
console.log("Delete o2 Name:");
delete o2.name
console.log(o2.name,o3.name)
console.log("After Delete Name:");
console.log("object property count for o2:",Object.keys(o2).length)
console.log("object property count for o3:",Object.keys(o3).length)