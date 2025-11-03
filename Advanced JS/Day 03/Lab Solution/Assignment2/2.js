for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}

// 5 repeated 5 times as var will store i in window object
// setTimout is asyn and it will go to web api then back to execution stack after timout 