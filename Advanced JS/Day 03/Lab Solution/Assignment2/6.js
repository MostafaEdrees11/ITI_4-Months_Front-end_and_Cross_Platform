function outerFunc() {
    let a = 10; // this a will logged

    function innerFunc() {
        console.log(a); //will go to global scope if it find a in local scope
    }

    return innerFunc;
}

let innerFunc = outerFunc();
innerFunc();