function scopeTest(){
    var x1 = 5;
    var x1 = "500";
    console.log(x1);
    let x2 = 4;
    // let x2 = "400"
    console.log(x2)
}

function scopeTest2(){
    var j = 0;
    for (let i=j; i<10; i++){
    // for (var i=j; i<10; i++){
        console.log(i+1);
    }
    // console.log(i,j);
}
scopeTest();
scopeTest2()