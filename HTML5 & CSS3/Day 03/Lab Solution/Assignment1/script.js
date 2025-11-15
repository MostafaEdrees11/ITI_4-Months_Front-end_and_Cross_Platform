let clickMeBtn = document.querySelector('button');
let canvas = document.querySelector('canvas');
let inputColor = document.querySelector("#color-input");

let ctx = canvas.getContext("2d");

clickMeBtn.addEventListener('click', function () {
    let circleColor = inputColor.value;
    let randomNumberOfCircles = Math.trunc(Math.random() * 50);

    for (let i = 0; i < randomNumberOfCircles; i++) {
        ctx.beginPath();

        let randomX = Math.trunc(Math.random() * parseInt(canvas.getAttribute("width")));
        let randomY = Math.trunc(Math.random() * parseInt(canvas.getAttribute("height")));

        let randomRadius = Math.trunc(Math.random() * 50);
        ctx.arc(randomX, randomY, randomRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = circleColor;
        ctx.stroke();
    }

})