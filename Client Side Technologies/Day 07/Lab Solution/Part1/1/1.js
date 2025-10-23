/*
    1- Using document object method:
        a- Find all images in page by two ways (document default collection
            and document methods)
        b- Find all options for City drop down list
        c- Find all rows for second table in page
        d- Find all elements that contain class name 'fontBlue'
*/

/*
    a- Find all images in page by two ways (document default collection
        and document methods)
*/
//First Way
imgsCollection = document.getElementsByTagName("img");
console.log("Using getElementsByTagName: ");
console.log(imgsCollection);

//Second Way
imgsCollection = document.querySelectorAll("img");
console.log("Using querySelectorAll: ");
console.log(imgsCollection);


/*
    b- Find all options for City drop down list
*/
optionsCollection = document.getElementsByTagName("select")[0].children;
console.log(optionsCollection);


/*
    c- Find all rows for second table in page
*/
rowsOfSecondTable = document.querySelectorAll("table")[1].children[0].children;
console.log(rowsOfSecondTable);


/*
    d- Find all elements that contain class name 'fontBlue'
*/
elementsWithFontBlueClass = document.getElementsByClassName("fontBlue");
console.log(elementsWithFontBlueClass);