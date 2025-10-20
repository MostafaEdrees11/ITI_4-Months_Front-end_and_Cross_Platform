/*
    1- Define an array of numbers as numbers=[3,1,2,4,3,5,1]; 
         Write a JavaScript code to remove duplicate items from an array. 
         Sort them ascending 
         Filter numbers larger than 50   
            a- User defined function 
            b- Array built in filter function 
         Display Max and Min Numbers 
            a- User defined function 
            b- Math functions using es6 feature (BONUS) 
*/

var numbers = [3, 1, 5, 4, 3, 2, 1];

function removeDuplicate(arr_numbers) {

    var unique_elements = new Array();
    var isExist = false;
    
    for(var i = 0; i < arr_numbers.length; i++) {
        isExist = false;
        for(var j = 0; j < arr_numbers.length; j++) {
            if((arr_numbers[i] == arr_numbers[j]) && (i != j)) {
                isExist = true;
                break;
            }
        }

        if(!isExist) {
            unique_elements.push(arr_numbers[i]);
        }
    }

    return unique_elements;
}
console.log("Array: " + numbers);
result = removeDuplicate(numbers);
console.log("Unique elements in array: " + result);


result_sorted = result.sort(function (a, b) {
    return a - b;
});
console.log("Sorting them ascending: " + result_sorted);



function userDefinedFilteredFunc(arr) {
    
    var filterdArr = new Array();
    
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 50)
            filterdArr.push(arr[i]);
    }

    return filterdArr;
}
console.log("Filter numbers that are greater than 50 using user defined function: " + userDefinedFilteredFunc(result));

var filteredArr = result.filter(function (element) {
    if(element > 50)
        return element;
})
console.log("Filter numbers that are greater than 50 using built-in function (filter): " + filteredArr);


console.log("Min using sorted array: " + result_sorted[0]);
console.log("Max using sorted array: " + result_sorted[result.length - 1]);

function userDefinedFindMinMaxFunc(arr) {

    var max = Number.MIN_SAFE_INTEGER;
    var min = Number.MAX_SAFE_INTEGER;

    for(var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }

        if(min > arr[i]) {
            min = arr[i];
        }
    }

    var min_max_arr = new Array();
    min_max_arr.push(min);
    min_max_arr.push(max);

    return min_max_arr;
}

min_max = userDefinedFindMinMaxFunc(result);
console.log("Min Number using user defined function: " + min_max[0]);
console.log("Max Number using user defined function: " + min_max[1]);

function getMin(a, b) {
    return Math.min(a, b);
}
console.log("Min Number using reduce: " + result.reduce(getMin));

function getMax(a, b) {
    return Math.max(a, b);
}
console.log("Max Number using reduce: " + result.reduce(getMax));
