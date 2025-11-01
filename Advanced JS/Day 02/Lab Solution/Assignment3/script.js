function fun() {

    let reversed = [];
    for (let i = arguments.length - 1; i >= 0; i--) {
        reversed.push(arguments[i]);
    }

    return reversed;
}

let reversedArgs = fun(1, 2, 3, 4, 5);
for (let i = 0; i < reversedArgs.length; i++) {
    console.log(reversedArgs[i]);
}

console.log("--------------------------------");


function fun2(...args) {
    return args.reverse();
}

let reversedArgs2 = fun2(5, 4, 3, 2, 1);
for (let i = 0; i < reversedArgs2.length; i++) {
    console.log(reversedArgs2[i]);
}