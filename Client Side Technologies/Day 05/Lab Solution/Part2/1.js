// Receive String From User and do all possible validations Then write code to calculate this 

do {
    var str = prompt("Enter a string: ");
} while(str.length < 5 || str.length > 30)

console.log("Entered String: " + str);

/*
    Write a JavaScript code that converts the first letter of each
    word of the string in upper case.
        Example: 'the quick brown fox'
        Output: 'The Quick Brown Fox'
*/
function captilizeFirstChar(_str) {
    
    var splitedStr = str.split(" ");
    var result = new Array();
    for(var i = 0; i < splitedStr.length; i++) {
        result.push(splitedStr[i][0].toUpperCase() + splitedStr[i].substring(1));
    }

    console.log("Result: " + result.join(" "));
}

captilizeFirstChar(str);

/*
    Write a JavaScript code that finds the longest word within the string
        Example: 'Web Development Tutorial'
        Output: 'Development'
*/
function findLongestWord(_str) {

    var splitedStr = str.split(" ");
    var max = 0;

    for(var i = 1; i < splitedStr.length; i++) {
        if(splitedStr[i].length > splitedStr[max].length) {
            max = i;
        }
    }

    return splitedStr[max];
}

var maxWord = findLongestWord(str);
console.log("Longest Word: " + maxWord);