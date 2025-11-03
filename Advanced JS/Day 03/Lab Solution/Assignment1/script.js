let form = document.querySelector("#login-form");

form.addEventListener('submit', function () {
    alert("Form Submitted");
})

let stopEvent = new Event("timeout");

form.addEventListener('timeout', function (e) {
    e.preventDefault();
    document.querySelector("#login-btn").disabled = true;
})

setTimeout(function () {
    form.dispatchEvent(stopEvent);
    alert("Form Stopped !!");
}, 10000);