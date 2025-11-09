// 1 - Create a base class Person with properties: name and age.
// 2 - Create a subclass Teacher with property subject and method teach().
// 3 - Create a subclass Student with property major and method study().
// 4 - Create objects of Teacher and Student, then call their methods.
// 5 - override a method introduce() in both Teacher and Student.

class Person {
    #name;
    #age;

    constructor(_name, _age) {
        this.Name = _name;
        this.Age = _age;
    }

    set Name(_name) {
        this.#name = _name;
    }

    get Name() {
        return this.#name;
    }

    set Age(_age) {
        if (_age < 0 || _age > 100) {
            throw "Age can't be negative number or greater than 100";
        } else {
            this.#age = _age;
        }
    }

    get Age() {
        return this.#age;
    }

    introduce() {
        return `Hello, I'm ${this.Name}. I'm ${this.Age} years old. I'm a ${this.constructor.name}.`;
    }
}

let person = new Person("Mohamed", 30);
console.log(person.introduce());
console.log("------------------");


class Teacher extends Person {

    constructor(_name, _age, _subject) {
        super(_name, _age);
        this.subject = _subject;
    }

    teachSubject() {
        console.log(`${super.Name} teaches ${this.subject} subject`);
    }

    introduce() {
        return `${super.introduce()} I teaches ${this.subject} subject`;
    }
}

let teacher = new Teacher("Mostafa", 23, "JS");
teacher.teachSubject();
console.log(teacher.introduce());
console.log("------------------");


class Student extends Person {

    constructor(_name, _age, _major) {
        super(_name, _age);
        this.major = _major;
    }

    studyMajor() {
        console.log(`${super.Name} studies ${this.major} major`);
    }

    introduce() {
        return `${super.introduce()} I studies ${this.major} major`;
    }
}

let student = new Student("Anas", 18, "HTML5");
student.studyMajor();
console.log(student.introduce());
console.log("------------------");