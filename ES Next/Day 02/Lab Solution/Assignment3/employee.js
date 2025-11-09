// --------Module 1: employee.js---------
// 1 - Create a class Employee with properties: firstName, lastName, age, salary.
// 2 - Add a method to class getFullName() that returns "FirstName LastName".
// 3 - out class Export an array departments with some department names(["IT", "HR", "Finance", "Sales"]).

export class Employee {
    #firstName;
    #lastName;
    #age;
    #salary;

    constructor(_fName, _lName, _age, _sal) {
        this.FirstName = _fName;
        this.LastName = _lName;
        this.Age = _age;
        this.Salary = _sal;
    }

    set FirstName(_fName) {
        this.#firstName = _fName ?? "Anonymous";
    }

    get FirstName() {
        return this.#firstName;
    }

    set LastName(_lName) {
        this.#lastName = _lName ?? "Anonymous";
    }

    get LastName() {
        return this.#lastName;
    }

    set Age(_age) {
        if (_age < 20 || _age > 60) {
            throw "Age must be between 20 to 60";
        } else {
            this.#age = _age;
        }
    }

    get Age() {
        return this.#age;
    }

    set Salary(_sal) {
        if (_sal < 0) {
            throw "Salary can't be a negative number";
        } else {
            this.#salary = _sal;
        }
    }

    get Salary() {
        return this.#salary;
    }

    getFullName() {
        return `${this.FirstName} ${this.LastName}`;
    }

    displayEmpFullData() {
        console.log(`Name: ${this.FirstName} ${this.LastName}, Age: ${this.Age}, Salary: ${this.Salary}`);
    }
}


export let departments = ["IT", "HR", "Finance", "Sales"];