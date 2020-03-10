try {
    setTimeout(() => { throw new Error("HAHA") }, 2000);
} catch (e) {
    console.log("got an error:"+e);
}
console.log("program terminated");