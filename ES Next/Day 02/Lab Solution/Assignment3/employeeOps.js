// --------Module 2: employeeOps.js------
// 1 - Import the Employee class.
// 2 - Create functions to:
// Add employee(s) to an array.
// 3 - Find employee by name.
// 4 - Increase salary for an employee.

import { Employee, departments } from './employee.js'

export let arrOfEmployees = [];

export function addEmployeesToArray(...employees) {
    employees.forEach((emp) => arrOfEmployees.push(emp));
}


export function findEmployeeByName(empFullName) {
    let employee = arrOfEmployees.find((emp) => emp.getFullName() == empFullName);
    return employee;
}


// let emp1 = new Employee("Mostafa", "Edrees", 23, 5000);
// let emp2 = new Employee("Anas", "Mostafa", 25, 3000);
// let emp3 = new Employee("Ahmed", "Mohamed", 22, 2500);
// let emp4 = new Employee("Ali", "Ayman", 30, 10000);

// addEmployeesToArray(emp1, emp2, emp3, emp4);

// arrOfEmployees.forEach((emp) => emp.displayEmpFullData());


// console.log("Required Employee:");
// findEmployeeByName("Mostafa Edrees").displayEmpFullData();


export function increaseSalaryForEmployee(_emp, increasedAmount) {
    _emp.Salary += increasedAmount;
}

// console.log("Employee before increasing: ");
// emp1.displayEmpFullData();
// console.log("Employee after increasing: ");
// increaseSalaryForEmployee(emp1, 1000);
// emp1.displayEmpFullData();
