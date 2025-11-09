// 1 - Create a base class Shape with a method calcArea().
// 2 - Create subclasses Rectangle and Circle, and override the calcArea() method in each.
// 3 - Create an array of different shapes(both rectangles and circles).
// 4 - Loop through the array and calculate the area  shapes.

class Shape {
    #length;
    #width;

    constructor(_length, _width) {
        this.Length = _length;
        this.Width = _width;
    }

    set Length(_length) {
        if (_length < 0) {
            throw "Length can't be a negative number";
        } else {
            this.#length = _length;
        }
    }

    get Length() {
        return this.#length;
    }

    set Width(_width) {
        if (_width < 0) {
            throw "Width can't be a negative number";
        } else {
            this.#width = _width;
        }
    }

    get Width() {
        return this.#width;
    }

    calcArea() {
        return this.Length * this.Width;
    }
}


class Rectangle extends Shape {

    constructor(_length, _width) {
        super(_length, _width);
    }

    calcArea() {
        return `Area of Rectangle: ${super.calcArea()}`;
    }
}

let rect = new Rectangle(3, 4);
console.log(rect.calcArea());

class Circle extends Shape {

    constructor(_radius) {
        super(_radius, 0);
    }

    calcArea() {
        return `Area of Circle: ${(super.Length * (Math.PI ** 2)).toFixed(3)}`;
    }
}

let circle = new Circle(5);
console.log(circle.calcArea());


let arrOfShapes = [
    new Rectangle(1, 2),
    new Circle(4),
    new Circle(7),
    new Rectangle(6, 8),
    new Circle(8)
];

console.log("------------------------------");
arrOfShapes.forEach((elm) => console.log(elm.calcArea()));
console.log("------------------------------");