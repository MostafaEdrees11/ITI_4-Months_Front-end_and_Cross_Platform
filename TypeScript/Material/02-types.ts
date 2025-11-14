let userName: string = "ahmed";
let greeting: string = `Hello ${userName}`;

console.log(greeting);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

let age: number = 30;
let temp: number = 23.3;
let binary: number = 0b1010; //binary literal

console.log(age, temp, binary);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

let isActive: boolean = true;
isActive = false;
console.log(isActive);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

let dynamicValue: any = "ahmed";
dynamicValue = 10;
dynamicValue = true;

console.log(dynamicValue);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Array

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["Apple", "Banana"];
let anyArray: Array<any> = [1, "ahmed", true, undefined, null];
console.log(numbers, fruits, anyArray);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// object

let person: object = { name: "Ahmed", age: 25 };

let car: { make: string; model: string; year: number } = {
  make: "Toyota",
  model: "Camry",
  year: 2000,
};
console.log(car);
console.log(car.make);
console.log(car.model);
console.log(car.year);

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// functions

function add(x: number, y: number): void {
  console.log(x + y);
}
// void --> return nothing , no return statement

function sum(x: number, y: number): number {
  return x + y;
}

console.log(sum(5, 5));

//  [[[?]]] --> optional
function greet(name: string, greeting?: string): string {
  return `${greeting || "hello"}  - ${name}`;
}

console.log(greet("ahmed", "hi"));
console.log(greet("ahmed"));

// function add2(x = 0 , y = 0){
//     return x + y;
// }

// console.log(add2(5,5))

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// Union

let id: string | number = 1;
id = "ABC";
console.log(id);


let shipStatus : "active" | "inactive" | "pending" | "completed" = "active"
console.log(shipStatus);

let clothes: "inStock" | "outOfStock" = "inStock";
console.log(clothes);