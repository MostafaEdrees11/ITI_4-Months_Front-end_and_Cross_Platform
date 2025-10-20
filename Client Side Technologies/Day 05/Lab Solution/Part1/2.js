/*
    2- Write a JavaScript function to Compute the sum and product of an array of integers  (Use eval)  
        a- Function header as  function sumAll(numbersArray) 
            Note: using eval , function input is an array and function call will be as 
            follow sumAll([3,1,4,5,2]); 
        b- Function header as   function sumAll() 
            Note: using eval and arguments array-like object 
*/

var numbers = [3, 1, 5, 4, 3, 2, 1];
function computeSumAndProduct(arr) {
    
    var sum = eval(numbers.join("+"));
    console.log("Sum of elements in the array: " + sum);

    var multiplication = eval(numbers.join("*"));
    console.log("Muiltiplication of elements in the array: " + multiplication)
}
computeSumAndProduct(numbers);


function computeSumAndProductWithoutDefineParameters() {

    var numbers = new Array();
    for(var i = 0; i < arguments.length; i++) {
        numbers.push(arguments[i]);
    }

    console.log("Sum: " + eval(numbers[0].join("+")));
    console.log("Muiltiplication: " + eval(numbers[0].join("*")));
}
computeSumAndProductWithoutDefineParameters(numbers);