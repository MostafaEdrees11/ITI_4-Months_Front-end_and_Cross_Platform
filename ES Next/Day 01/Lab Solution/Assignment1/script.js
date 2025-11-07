const students = [
    { id: 1, name: "Ali", grade: 80, city: "Cairo" },
    { id: 2, name: "Sara", grade: 92, city: "Alexandria" },
    { id: 3, name: "Omar", grade: 74, city: "Giza" },
    { id: 4, name: "Mona", grade: 88, city: "Cairo" }
];

//1- Create a new array that contains only the names of students using arrow functions.
let namesOfStudents = students.map(std => std.name);
console.log("Names: " + namesOfStudents.join(", "));


//2-Get all students who have a grade greater than or equal to 85.(filter)
let gradeGreaterThan85 = students.filter(std => std.grade >= 85);
console.log("Students who have a grade greater than or equal to 85: ", gradeGreaterThan85);


//3 - Find the student whose name is "Sara".(list object details)
let sara = students.find(std => std.name === 'Sara');
console.log(`Details of Sara => ID: ${sara.id}, Grade: ${sara.grade}, City: ${sara.city}`);


//4-Calculate the average grade of all students.(reduce)
let avgGrade = students.reduce((accumulator, currentStudent) => {
    return accumulator + currentStudent.grade;
}, 0) / students.length;
console.log(`AVG grade: ${avgGrade}`);


//5-Sort students by grade (descending) using arrow function in sort.
let newArrayForSorting = [...students];
console.log("Before Sorting: ");
console.log("---------------------------------");
newArrayForSorting.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");
newArrayForSorting.sort((std1, std2) => std2.grade - std1.grade);
console.log("After Sorting: ");
console.log("---------------------------------");
newArrayForSorting.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//6-Print Students using forEach arr fun 
console.log("Students Data: ")
console.log("---------------------------------");
students.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//7-Make a shallow copy of the students array using spread.
let shallowCopyOfStudents = [...students];


//8-Add a new student object into the array using spread.
shallowCopyOfStudents = [...shallowCopyOfStudents, { id: 7, name: "Mostafa", grade: 99, city: "Samannud" }];
console.log("After adding new student: ");
shallowCopyOfStudents.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//9-Suppose you have another array of students, merge it with the first array using spread
let mergedArrayOfStudents = [...shallowCopyOfStudents, ...students];
console.log("Merging two arrays: ");
mergedArrayOfStudents.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//10- Update "Omar"’s grade to 95 without mutating the original array (use spread inside map).
let studentsAfterEditOmar = students.map(std => {
    if (std.name === 'Omar') {
        let newObjectForOmar = { ...std, grade: 95 };
        return newObjectForOmar;
    } else {
        return std;
    }
});
console.log("Students after editting omar's grade: ");
studentsAfterEditOmar.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//11-Remove the student with id = 2 using filter + spread.
let studentsAfterFilterStudentWithID2 = [...students.filter(std => std.id !== 2)];
console.log("Students after filtering student with ID 2: ");
studentsAfterFilterStudentWithID2.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//12- Take out the first student and keep the rest in another array using destructuring + spread
let [, ...otherStudents] = students;
console.log("Other Students after out first student: ");
otherStudents.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//13- destruct and Extract the first student into a variable, and keep the rest into another array using rest
let [firstStudent, ...otherStudent] = students;
console.log(`First Student: ${firstStudent.id}, ${firstStudent.name}, ${firstStudent.grade}, ${firstStudent.city}`);
console.log("Other Students: ");
otherStudent.forEach(std => console.log(`${std.id}, ${std.name}, ${std.grade}, ${std.city}`));
console.log("---------------------------------");


//14- Skip the first two students and store the third one in a variable.
let [, , thirdStudent] = students;
console.log(`Third Student: ${thirdStudent.id}, ${thirdStudent.name}, ${thirdStudent.grade}, ${thirdStudent.city}`);
console.log("---------------------------------");
