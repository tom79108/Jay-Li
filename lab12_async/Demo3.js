setTimeout(() => {
    console.log("prepare for stage2");
    setTimeout(() => { console.log("prepare for stage3"); }, 2000);
}, 2000);
console.log("start working")