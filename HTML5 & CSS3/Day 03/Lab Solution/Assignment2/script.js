let audio = document.querySelector('audio');
let timeRange = document.querySelector('input');

// audio.addEventListener('load', function () {
//     timeRange.setAttribute("max", audio.duration);
// })

audio.addEventListener('timeupdate', function () {
    timeRange.value = audio.currentTime;
})

timeRange.addEventListener('input', function () {
    audio.currentTime = timeRange.value;
})

let playBtn = document.querySelector('.ctrl-btns:nth-child(1)');
playBtn.addEventListener('click', function () {
    audio.play();
    timeRange.setAttribute("max", audio.duration);
})

let pauseBtn = document.querySelector('.ctrl-btns:nth-child(2)');
pauseBtn.addEventListener('click', function () {
    audio.pause();
})

let stopBtn = document.querySelector('.ctrl-btns:nth-child(3)');
stopBtn.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
    timeRange.value = 0;
})

let img = document.querySelector(".img-container img");
let sounds = document.querySelectorAll('.sound');
for (let i = 0; i < sounds.length; i++) {
    sounds[i].addEventListener('click', function () {
        audio.src = sounds[i].getAttribute("soundSrc");
        img.src = sounds[i].getAttribute("imgSrc");
    })
}