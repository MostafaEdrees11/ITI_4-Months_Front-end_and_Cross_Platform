$(document).ready(function () {
    let userName = "Mostafa", password = "123";

    $("#name").keyup(function () {
        if ($(this).val() === userName) {
            $("#userNameState").html("Valid");
            $("#userNameState").css({ "color": "green"});
        } else {
            $("#userNameState").html("In-Valid");
            $("#userNameState").css({ "color": "red"});
        }
    })

    $("#pass").keyup(function () {
        if ($(this).val() === password) {
            $("#passState").html("Valid");
            $("#passState").css({ "color": "green"});
        } else {
            $("#passState").html("In-Valid");
            $("#passState").css({ "color": "red"});
        }
    })
})