/*
    3 - In this problem, you need to implement a factory ToyFactory that can create a toy duck 
        and a toy car object using either the ToyDuck or ToyCar function constructor.
            A ToyDuck object should have the following properties:
                color
                price
            A ToyCar object should have the following properties:
                colors
                price
                name
*/

class ToyDuck {
    constructor({ color, price }) {
        this.color = color;
        this.price = price;
    }
}

class ToyCar {
    constructor({ colors, price, name }) {
        this.colors = colors;
        this.price = price;
        this.name = name;
    }
}

class ToyFactory {
    constructor() {
    }

    createToy(type, toyProperties) {
        switch (type) {
            case "Duck":
                return new ToyDuck({ color: toyProperties.color, price: toyProperties.price });
            case "Car":
                return new ToyCar({ colors: toyProperties.colors, price: toyProperties.price, name: toyProperties.name });
        }
    }
}

let toys = [];

let factory = new ToyFactory();
let duck = factory.createToy('Duck', { color: "Red", price: 25 });
let car = factory.createToy("Car", { colors: ["red", "blue"], price: 50, name: "BMW" });

toys.push(duck);
toys.push(car);

console.log(toys)
