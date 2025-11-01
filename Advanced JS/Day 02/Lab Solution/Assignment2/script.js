function add() {

    if(arguments.length === 0) {
        throw "There is no arguments";
    }

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw "All arguments must be numbers";
        }
    }

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}


// console.log(add());
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));
// console.log(add("mostafa", 1, "ali", 2, 3, 4, 5));