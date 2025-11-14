//Interfaces
// I
//can be inherited

interface UserInterface {
  id: number;
  name: string;
  email: string;
  age?: number;
}

interface EmployeeInterface extends UserInterface {
  department: string;
  position: string;
}

// using interface
const newUser1: UserInterface = {
  id: 1,
  name: "ahmed",
  email: "ahmed@gmail.com",
  age: 25,
};

const newUser2: UserInterface = {
  id: 2,
  name: "mohamed",
  email: "mohamed@gmail.com",
};

const emp1: EmployeeInterface = {
  id: 3,
  name: "ali",
  email: "ali@gmail.com",
  age: 30,
  department: "SWE",
  position: "front-end developer",
};

console.log(newUser1, newUser2);
console.log(emp1);

interface User {
  id: string;
  name: string;
  email: string;
  pass: string;
  age: number;
  isActive: boolean;
  address: string;
}

type stock = "inStock" | "outOfStock";

interface Product {
  id: string;
  category: string;
  name: string;
  quantity: number;
  isSale: boolean;
  desc?: string;
  stock: stock;
  shipping: "pending" | "failure" | "completed";
}

// not allowed
// interface Course{
//     name: string = "js"
// }

interface MathOperation {
  (x: number, y: number): number;
}

const divide: MathOperation = (a, b) => a / b;
const sum: MathOperation = (a, b) => a + b;
const mul: MathOperation = (a, b) => a * b;

console.log(divide(5, 5));
console.log(sum(5, 5));
console.log(mul(5, 5));

interface Point {
 readonly x: number;
 readonly y: number;
}

const point1: Point = { x: 10, y: 20 };
// point1.x = 30;
// point1.y = 30;
console.log(point1)