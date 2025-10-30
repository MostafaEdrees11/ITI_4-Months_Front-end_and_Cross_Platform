let userName = "Mostafa", password = "123";

let enteredUserName = document.location.href.split("?")[1].split("&")[0].split("=")[1];
let enteredPass = document.location.href.split("?")[1].split("&")[1].split("=")[1];

if ((userName == enteredUserName) && (password == enteredPass)) {
    window.open("welcomePage.html");
} else {
    window.open("errorPage.html");
}