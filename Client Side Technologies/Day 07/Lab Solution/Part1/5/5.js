/*
    5- write js code to print data from array as even indexes will be printed with 
    style different than odd ones  
*/
// data = [2, 1, 4, 3, 6, 5];

data = [{ studentID: 1000, studentName: "Mostafa Edrees", studentAge: 23 },
{ studentID: 2000, studentName: "Anas Mostafa", studentAge: 20 },
{ studentID: 3000, studentName: "Mohamed Ali", studentAge: 25 },
{ studentID: 4000, studentName: "Osama Ahmed", studentAge: 30 },
{ studentID: 5000, studentName: "Hamad Ibrahim", studentAge: 22 },
{ studentID: 6000, studentName: "Samar Mahmoud", studentAge: 26 },
];

data.forEach(function (elm, index) {
    if (index % 2 == 0) {
        evenElm = `
        <div class="even">
        <h3>Even Element</h3>
        <hr/>
        <p><strong>Student ID: </strong> ${data[index].studentID}</p>
        <p><strong>Student Name: </strong> ${data[index].studentName}</p>
        <p><strong>Student Age: </strong> ${data[index].studentAge}</p>
        </div>
        `
        document.body.innerHTML += evenElm;
    } else {
        oddElm = `
        <div class="odd">
        <h3>Odd Element</h3>
        <hr/>
        <p><strong>Student ID: </strong> ${data[index].studentID}</p>
        <p><strong>Student Name: </strong> ${data[index].studentName}</p>
        <p><strong>Student Age: </strong> ${data[index].studentAge}</p>
        </div>
        `
        document.body.innerHTML += oddElm;
    }
})