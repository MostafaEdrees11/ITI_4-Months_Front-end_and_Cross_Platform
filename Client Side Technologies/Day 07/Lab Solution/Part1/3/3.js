nextButton = document.querySelector("#next");
previousButton = document.querySelector("#previous");
slideShowButton = document.querySelector("#show");
stopButton = document.querySelector("#stop");

image = document.querySelector("#imgFrame");


counter = 1;

nextButton.addEventListener('click', function (e) {
    
    counter++;
    if (counter > 6)
        counter = 1;

    image.src = "imgs/" + counter + ".png";
});


previousButton.addEventListener('click', function (e) {

    counter--;
    if (counter < 1)
        counter = 6;

    image.src = "imgs/" + counter + ".png";
})

slideShowButton.addEventListener('click', function (e) {

    slideShowIntervalID = setInterval(function () {
        counter++;

        if (counter > 6)
            counter = 1;

        image.src = "imgs/" + counter + ".png";
    }, 1000)
})

stopButton.addEventListener('click', function (e) {
    clearInterval(slideShowIntervalID);
})