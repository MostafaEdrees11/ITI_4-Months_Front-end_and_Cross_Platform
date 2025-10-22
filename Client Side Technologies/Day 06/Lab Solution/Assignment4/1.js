var students = [
    { name: "Ali", age: 20, Crs: "CS" },
    { name: "Sara", age: 22, Crs: "Math" },
    { name: "Omar", age: 19, Crs: "Physics" },
    { name: "Laila", age: 21, Crs: "CS" },
    { name: "Hassan", age: 23, Crs: "Engineering" },
    { name: "Mona", age: 20, Crs: "Biology" },
    { name: "Kareem", age: 24, Crs: "Math" },
    { name: "Noor", age: 18, Crs: "CS" }];

// 1- Display all students
document.writeln("<h1>Students: </h1>");
students.forEach(function (elm) {
    var res = "Name: " + elm.name + ", Age: " + elm.age + ", Course: " + elm.Crs;
    document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
});

document.writeln("<hr style='border: 3px solid red;'/>")

// 2-find and Search for a student by name and print their details.
function searchForStudentUsingName(_students, _name) {
    
    _students.forEach(function (elm) {
        if(elm.name == _name) {
            var res = "Name: " + elm.name + ", Age: " + elm.age + ", Course: " + elm.Crs;
            document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
        }
    });
}
document.writeln("<h1>Test search function for students with name: </h1>");
searchForStudentUsingName(students, "Ali"); // exist
searchForStudentUsingName(students, "mostafa"); // not exist
searchForStudentUsingName(students, "Noor"); // exist

document.writeln("<hr style='border: 3px solid red;'/>");

// 3-Find how many students are in the array(count Students).
document.writeln("<h1>Count students: </h1>");
document.writeln('<p style="font-size: 20px; color: green;">' + "Number of students: " + students.length + "</p>");

document.writeln("<hr style='border: 3px solid red;'/>");

// 4-Get all students who are in "CS"
document.writeln("<h1>Students who are study CS: </h1>");
studentsStudyCS = students.filter(function (elm) {
    if(elm.Crs == "CS") {
        return elm;
    }
});
studentsStudyCS.forEach(function (elm) {
    var res = "Name: " + elm.name + ", Age: " + elm.age;
    document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
});


document.writeln("<hr style='border: 3px solid red;'/>");

// 6- Sort Students by age
students.sort(function (a, b) {
    return a.age - b.age;
});

//5-Find youngest student
document.writeln("<h1>Youngest student: </h1>");
var res = "Name: " + students[0].name + ", Age: " + students[0].age + ", Course: " + students[0].Crs;
document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");

document.writeln("<hr style='border: 3px solid red;'/>");


// 7-Create a new array with only student names.
var studentsName = students.map(function (elm) {
    return elm.name;
});
document.writeln("<h1>Students Names: </h1>");
studentsName.forEach(function (elm) {
    var res = "Name: " + elm;
    document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
});

document.writeln("<hr style='border: 3px solid red;'/>");

// 8-Check if all students are above age  18 and return true or false 
var res = students.every(function(elm) {
    if(elm.age > 18) {
        return true;
    }
});
document.writeln("<h1>Is that all students are above 18? </h1>");
document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");

document.writeln("<hr style='border: 3px solid red;'/>");

// 9-return Students Who Have the Same Crs
document.writeln("<h1>Students who have the same crs: </h1>");
var crsList = students.map(function (elm) {
    return elm.Crs;
});
var uniqueCrsList = new Array();
crsList.forEach(function (elm) {
    if(!uniqueCrsList.includes(elm)) {
        uniqueCrsList.push(elm);
    }
})
for(var i = 0; i < uniqueCrsList.length; i++) {
    document.writeln("<h2>Students that are study " + uniqueCrsList[i] + ": </h2>");
    var filteredStudents = students.filter(function (elm) {
        if(elm.Crs === uniqueCrsList[i]) {
            return elm;
        }
    })

    filteredStudents.forEach(function (elm) {
        var res = "Name: " + elm.name + ", Age: " + elm.age;
        document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
    })
}

document.writeln("<hr style='border: 3px solid red;'/>");

// 10-Calculate the average age of all students.
sum = 0;
students.forEach(function (elm) {
    sum += elm.age;
});
document.writeln("<h1>Average age of all students: </h1>");
document.writeln('<p style="font-size: 20px; color: green;">' + sum / students.length + "</p>");


document.writeln("<hr style='border: 3px solid red;'/>");


// 11-Sort and Find top 3 oldest students
// we sort it before
document.writeln("<h1>Oldest three students: </h1>");
var oldestStudents = [students[students.length - 1], students[students.length - 2], students[students.length - 3]]
oldestStudents.forEach(function (elm) {
    var res = "Name: " + elm.name + ", Age: " + elm.age + ", Course: " + elm.Crs;
    document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
});


document.writeln("<hr style='border: 3px solid red;'/>");


// 12-Find if there are students with the same name.
repeatedStudentsName = studentsName.filter(function (elm) {
    if(studentsName.indexOf(elm) != studentsName.lastIndexOf(elm)) {
        return elm;
    }
});
document.writeln("<h1>Students with the same name: </h1>");
if(repeatedStudentsName.length != 0) {
    repeatedStudentsName.forEach(function (elm) {
        var res = "Name: " + elm.name + ", Age: " + elm.age + ", Course: " + elm.Crs;
        document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
    });
} else {
    document.writeln('<p style="font-size: 20px; color: green;">' + "No students with the same name" + "</p>");
}


document.writeln("<hr style='border: 3px solid red;'/>");


// 13-Reverse the array without using .reverse().
var reversedArrayOfStudents = new Array();
for(var i = students.length - 1; i >= 0; i--) {
    reversedArrayOfStudents.push(students[i]);
}
document.writeln("<h1>Students in reverse order: </h1>");
reversedArrayOfStudents.forEach(function (elm) {
    var res = "Name: " + elm.name + ", Age: " + elm.age + ", Course: " + elm.Crs;
    document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
});


document.writeln("<hr style='border: 3px solid red;'/>");


// 14-Add a new property email for each student in the format: name.toLowerCase+"@iti.com"
newStudentsArrayWithEmail = students.map(function (elm) {
    elm.email = elm.name.toLocaleLowerCase() + "@iti.com";
    return elm;
})
document.writeln("<h1>Students data with email property: </h1>");
newStudentsArrayWithEmail.forEach(function (elm) {
    var res = "Name: " + elm.name + ", Age: " + elm.age + ", Course: " + elm.Crs + ", Email: " + elm.email;
    document.writeln('<p style="font-size: 20px; color: green;">' + res + "</p>");
});

document.writeln("<hr style='border: 3px solid red;'/>");
