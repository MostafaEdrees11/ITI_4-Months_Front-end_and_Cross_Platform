var enteredUserName = location.href.split("?")[1].split("&")[0].split("=")[1];
var enteredPassword = location.href.split("?")[1].split("&")[1].split("=")[1];

var user = "ali", password = "123";


if((enteredUserName === user) && (enteredPassword === password)) {
    open("welcomePage.html", "Welcome", "width=400,height=400");
} else {
    open("error.html", "Error", "width=400,height=400");
}