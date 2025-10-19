alert("This is External Script");

console.log("num1: " + num1.toPrecision(6));

// console.log("num2: " + num2.toPrecision(6));
console.log("num2: " + Number.parseInt(num2).toPrecision(6));

var sum = num1 + num3;
console.log("num1 + num3 = " + sum);

console.log("1 * x = " + 1 * x);

// ---------------------------
/* 
    Receive from user 2 values using dialoge methods then print them as string or 
    sum them if we can convert these values 
*/ 
var val1 = prompt("Enter 1st value: ");
var val2 = prompt("Enter 2nd value: ");
console.log("val1: " + val1);
console.log("val2: " + val2);

if(!isNaN(parseInt(val1)) && !isNaN(parseInt(val2))) {
    var sum = parseInt(val1) + parseInt(val2);
    console.log("sum: " + sum);
} else {
    console.log(val1 + " " + val2);
}


// ------------------
// Recive from user  5 numbers and print these nums in cinole with 5 digits  
for(var i = 0; i < 5; i++) {
    var val = prompt("Enter " + (i + 1) + " value: ");
    console.log("Value " + (i+1) + ": " + parseInt(val).toPrecision(5));
}
