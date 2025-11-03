var a = 10;

function foo() {
    var a = 20;
    console.log(a); //20 it will use the local variable
}

// foo();
a = 30;

foo();