var str = "Welcome to JS";

var strArr = str.split("");

var index = 0;
function printChar() {
    if(index == strArr.length) {
        close();
    }

    document.write(strArr[index]);
    index++;
}

setInterval(printChar, 1000);