/*
    4- Write JavaScript function that returns  random array of numbers between 1:10  
    Array length is 8 and no repeated random data appears on array
*/

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomNumbers() {
    
    var eightRandomNumbers = new Array();
    do {
        var n = getRandomInt(1, 10);
        if(eightRandomNumbers.indexOf(n) == -1)
            eightRandomNumbers.push(n);
    } while(eightRandomNumbers.length < 8)

    return eightRandomNumbers;
}

var result = getRandomNumbers();
console.log("Eight Random Numbers: " + result);