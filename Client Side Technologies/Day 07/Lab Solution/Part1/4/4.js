/*
    having dropdown Menu containing IDs for array of Objects for Students where
    selecting id
        --> Display student data in div
*/
students = [{ studentID: 1000, studentName: "Mostafa Edrees", studentAge: 23 },
{ studentID: 2000, studentName: "Anas Mostafa", studentAge: 20 },
{ studentID: 3000, studentName: "Mohamed Ali", studentAge: 25 },
{ studentID: 4000, studentName: "Osama Ahmed", studentAge: 30 },
{ studentID: 5000, studentName: "Hamad Ibrahim", studentAge: 22 },
{ studentID: 6000, studentName: "Samar Mahmoud", studentAge: 26 },
];

studentDataDiv = document.getElementById("studentDataContainer");
// console.log(studentDataDiv);

function displayStudentData(_id) {

    if (this.value > 0 && this.value <= students.length) {
        studentDataDiv.innerHTML = `
        <h1>Student Data: </h1>
        <hr/>
        <p><strong>Student ID: </strong> ${students[this.value - 1].studentID}</p>
        <p><strong>Student Name: </strong> ${students[this.value - 1].studentName}</p>
        <p><strong>Student Age: </strong> ${students[this.value - 1].studentAge}</p>
        `;
    } else {
        studentDataDiv.innerHTML = 'No Students Selected';
    }
}

selection = document.getElementsByName("selectedOption")[0];
selection.addEventListener('change', displayStudentData);