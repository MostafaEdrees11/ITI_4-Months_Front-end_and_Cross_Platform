$(document).ready(function () {
    $("#tiger").click(function () {
        $("#tiger").animate({left: 0 }, 4000, function () {
                    $("#tiger").fadeOut(1000);
            }
        )
    })
})