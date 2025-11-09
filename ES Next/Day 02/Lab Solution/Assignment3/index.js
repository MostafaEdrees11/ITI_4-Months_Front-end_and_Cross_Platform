// --------- Main File: index.js--------
// 1 - Import everything from both modules.
// 2 - Create a few employees, store them in an array.
// 3 - Print all employees’ info on Document not console.

import * as Emp from './employee.js'
import * as EmpOps from './employeeOps.js'


let emp1 = new Emp.Employee("Mostafa", "Edrees", 23, 5000);
let emp2 = new Emp.Employee("Anas", "Mostafa", 25, 3000);
let emp3 = new Emp.Employee("Ahmed", "Mohamed", 22, 2500);
let emp4 = new Emp.Employee("Ali", "Ayman", 30, 10000);


EmpOps.addEmployeesToArray(emp1, emp2, emp3, emp4);

// EmpOps.arrOfEmployees.forEach((emp) => emp.displayEmpFullData());

let empContainer = document.querySelector("#container");
EmpOps.arrOfEmployees.forEach((emp) => {
    let p = document.createElement("p");
    p.innerText = `Name: ${emp.FirstName} ${emp.LastName}, Age: ${emp.Age}, Salary: ${emp.Salary}`;
    empContainer.appendChild(p);
});