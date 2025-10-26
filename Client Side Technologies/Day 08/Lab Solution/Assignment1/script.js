fetchDataBTN = document.querySelector("#get-data");
tableDataBody = document.querySelector("table").children[0];

fetchDataBTN.addEventListener("click", function () {
    
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "https://api.jsonbin.io/v3/b/68fcf992d0ea881f40bb2b6c", true);
    httpReq.send("");

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4 && httpReq.status == 200) {
            var users = JSON.parse(httpReq.responseText).record;

            users.forEach(function (elm) {
                var newRow = document.createElement("tr");
                
                var firstName = document.createElement("td");
                var lastName = document.createElement("td");
                var phone = document.createElement("td");
                var address = document.createElement("td");
                var track = document.createElement("td");
                var courses = document.createElement("td");
                var position = document.createElement("td");

                firstName.textContent = elm.firstName;
                lastName.textContent = elm.lastName;
                phone.textContent = elm.phone;
                address.textContent = elm.address;
                track.textContent = elm.track;
                courses.textContent = elm.courses.join(" | ");
                position.textContent = elm.position;

                var image = document.createElement("img");
                image.src = elm.image;
                image.style.cssText = "width: 100px; height:100px";

                newRow.appendChild(firstName);
                newRow.appendChild(lastName);
                newRow.appendChild(phone);
                newRow.appendChild(address);
                newRow.appendChild(track);
                newRow.appendChild(courses);
                newRow.appendChild(position);
                newRow.appendChild(image);

                tableDataBody.appendChild(newRow);
            })
        }
    }
})