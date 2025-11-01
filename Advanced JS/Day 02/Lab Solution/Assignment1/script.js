function sum(num1, num2) {

    if (arguments.length === 2) {
        console.log(num1 + num2);
    } else {
        throw "You can pass only two arguments";
    }
}

// sum();
// sum(1, 2);
sum(1, 2, 3);