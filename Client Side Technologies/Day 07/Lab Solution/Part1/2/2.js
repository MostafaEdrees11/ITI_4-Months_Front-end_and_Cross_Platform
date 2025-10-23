/*
    2- Do the following actions on the following HTML elements
        a- Get first anchor inside the second table then change its href property
            to training.com and it's text to 'Training'
        b- Find last image and change its border to: solid pink 2px
        c- create Javascript function to Find all checkboxes(checked) in userData
            form and alert their values
        d- Find element with id value "example" then change it's background color to pink
*/

/*
    a- Get first anchor inside the second table then change its href property
        to training.com and it's text to 'Training'
*/
// firstAnchorInside2ndTable = document.querySelectorAll("table")[1].children[0].children[0].children[0].children[0];
// console.log("Before edit: ");
// console.log(firstAnchorInside2ndTable);
// console.log(firstAnchorInside2ndTable.innerHTML);
// console.log(firstAnchorInside2ndTable.href);

// firstAnchorInside2ndTable.innerHTML = "Training";
// firstAnchorInside2ndTable.href = "training.com";

// console.log("After edit: ");
// console.log(firstAnchorInside2ndTable);
// console.log(firstAnchorInside2ndTable.innerHTML);
// console.log(firstAnchorInside2ndTable.href);



/*
    b- Find last image and change its border to: solid pink 2px
*/
// lastImg = document.querySelectorAll("img")[1];
// lastImg.style.border = "2px solid pink";
// console.log(lastImg);



/*
    c- create Javascript function to Find all checkboxes(checked) in userData
        form and alert their values
*/
// function findAllCheckBoxes() {

//     // boxes = document.getElementsByName("hoppy");
//     // console.log(boxes);

//     checkBoxes = document.querySelectorAll("input[type='checkbox']");
//     console.log(checkBoxes);

//     for (var i = 0; i < checkBoxes.length; i++) {
//         if (checkBoxes[i].checked) {
//             alert(checkBoxes[i].value);
//         }
//     }
// }

// findAllCheckBoxes();



/*
    d- Find element with id value "example" then change it's background color to pink
*/
// elementWithIDExample = document.querySelector("#example");
// elementWithIDExample = document.getElementById("example");
// console.log(elementWithIDExample);
// elementWithIDExample.style.backgroundColor = 'pink';