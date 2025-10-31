$(document).ready(function () {
    $("#login-btn").click(function () {
        $("#login-state").empty();
        $("#blanket").fadeIn();
        $("#login-window").fadeIn();
    });

    $("#cancel-btn").click(function () {
        $("#blanket").fadeOut();
        $("#login-window").fadeOut();
    });

    $("#login-form").submit(function (e) {

        e.preventDefault();
        let userName = "Mostafa";
        let password = "123";

        let enteredUserName = $("#userName").val();
        let enteredPassword = $("#password").val();

        if ((userName == enteredUserName) && (password == enteredPassword)) {
            $("#login-state").html(`Welcome ${enteredUserName}`);
            $("#login-state").addClass("success");
            if($("#login-state").hasClass("failed"))
                $("#login-state").removeClass("failed");

        } else {
            $("#login-state").html(`Error`);
            $("#login-state").addClass("failed");
            if($("#login-state").hasClass("success"))
                $("#login-state").removeClass("success");
        }

        $("#login-window").fadeOut();
        $("#blanket").fadeOut();
    })
});