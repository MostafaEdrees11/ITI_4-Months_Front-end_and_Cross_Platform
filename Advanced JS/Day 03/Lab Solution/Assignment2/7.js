var a = 10;

function foo() {
    console.log(a); //10
}

function bar() {
    var a = 20;
    foo();
}

bar();