counter = 0;

function increaseCounter() {

    document.title = counter;
    document.write('<p style="border: 2px solid red; outline: 3px solid black; width: fit-content; padding: 5px;">' + counter + '</p>');
    counter++;
}

setInterval(increaseCounter, 1000);