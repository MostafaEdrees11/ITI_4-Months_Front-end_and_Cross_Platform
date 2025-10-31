function Shape(_w, _h) {

    if (this.constructor == Shape) {
        throw "Can't create an object from shap"
    }

    this.width = _w;
    this.height = _h;
}

function Rectangle(_width, _height) {

    if (Rectangle.instance)
        throw "Can't Create more than one object : Rectangle";
    Shape.call(this, _width, _height);
    Rectangle.instance = this;
}

Rectangle.instance = null;
Rectangle.getInstance = function () {
    return Rectangle.instance;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
}

Rectangle.prototype.calculatePreimeter = function () {
    return (this.width + this.height) * 2;
}

let rect1 = new Rectangle(5, 6);
console.log("Area: " + rect1.calculateArea());
console.log("Preimeter: " + rect1.calculatePreimeter());
console.log("----------------------------");


// let rect2 = new Rectangle(2, 3);
// console.log("Area: " + rect2.calculateArea());
// console.log("Preimeter: " + rect2.calculatePreimeter());
// console.log("----------------------------");

// let rect3 = new Rectangle();
// console.log("Area: " + rect3.calculateArea());
// console.log("Preimeter: " + rect3.calculatePreimeter());
// console.log("----------------------------");

function Square(_l) {

    if (Square.instance)
        throw "Can't Create more than one object : Square";
    Shape.call(this, _l, _l);
    Square.instance = this;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.instance = null;
Square.getInstance = function () {
    return Square.instance;
}

Square.prototype.calculatePreimeter = function () {
    return this.width * 4;
}

let sq1 = new Square(5);
console.log("Area: " + sq1.calculateArea());
console.log("Preimeter: " + sq1.calculatePreimeter());
console.log("----------------------------");

// let sq2 = new Square(3);
// console.log("Area: " + sq2.calculateArea());
// console.log("Preimeter: " + sq2.calculatePreimeter());
// console.log("----------------------------");
