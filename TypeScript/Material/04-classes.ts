// // classes

// class Animal {
//   // properties
//   name: string;

//   // constructor --> initialize property
//   constructor(name: string) {
//     this.name = name;
//   }

//   //   methods
//   move(distance: number = 0): void {
//     console.log(`${this.name} moved ${distance}`);
//   }
// }

// // inherit
// class Dog extends Animal {
//   breed: string;
//   constructor(name: string, breed: string) {
//     super(name); //call parent constructor
//     this.breed = breed;
//   }

//   //   new method
//   bark(): void {
//     console.log("haw haw");
//   }

//   //   override
//   move(distance: number = 5): void {
//     console.log(`${this.name} ${this.breed} moved ${distance}`);
//     super.move(distance);
//   }
// }

// const animal1 = new Animal("generic animal");
// console.log(animal1.name);
// animal1.move();
// animal1.move(5);

// const dog1 = new Dog("fox" , "golden");
// console.log(dog1.name);
// console.log(dog1.breed);
// dog1.bark();
// dog1.move()
// dog1.move(8)

// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz

// abstract class , cannot be instantiated directly

abstract class Department {
  constructor(name: string) {}
  abstract printMessage(): void; //must be implemented in derived classes
}

class AccountDepartment extends Department {
  constructor() {
    super("Accounting Department");
  }
  printMessage(): void {
    console.log("accounting department meeting at 9:00 am");
  }
}


const accounting1 = new AccountDepartment()
accounting1.printMessage();
