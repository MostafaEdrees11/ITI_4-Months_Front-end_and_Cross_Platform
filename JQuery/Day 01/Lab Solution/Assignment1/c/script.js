$(document).ready(function () {
    imgFaceLinks = ["https://tse1.mm.bing.net/th/id/OIP.X5UY7kKdQ3RKSKiuYKaOOQHaFr?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://th.bing.com/th/id/R.a681c9845e0c1b747dbb939c13c913fb?rik=8PtFdTpiql%2fOsQ&pid=ImgRaw&r=0"
    ]
    $("#face-img").mouseenter(function () {
        $("#face-img").attr("src", imgFaceLinks[0]);
        $("#face-img").attr("alt", "Smile Face");
    }).mouseleave(function () {
        $("#face-img").attr("src", imgFaceLinks[1]);
        $("#face-img").attr("alt", "Sad Face");
    });
})