// Write a function printNames(...names) that accepts any number of student objects
// and prints their name using spread operator

function Student(_id, _name, _grade, _city) {
    this.id = _id;
    this.name = _name;
    this.grade = _grade;
    this.city = _city;
}

let std1 = new Student(1, "ali", 80, "cairo");
let std2 = new Student(2, "sara", 92, "alex");
let std3 = new Student(3, "omar", 74, "giza");
let std4 = new Student(4, "mona", 88, "cairo");

function printNames(...studentObjects) {
    console.log("Students Names: ");
    for (let i = 0; i < studentObjects.length; i++) {
        console.log(studentObjects[i].name);
    }
}

let students = [std1, std2, std3, std4];

printNames(...students);