$(document).ready(function () {
    $("#tiger").click(function () {
        $("#tiger").animate(
            { left: 0 },
            {
                duration: 4000,
                complete: function () {
                    $("#tiger").fadeOut(1000);
                }
            }
        )
    })
})