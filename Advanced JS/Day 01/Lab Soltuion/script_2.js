function Shape(_w, _h) {

    if (this.constructor == Shape) {
        throw "Can't create an object from shap"
    }

    this.width = _w;
    this.height = _h;
}

function Rectangle(_width, _height) {

    Shape.call(this, _width, _height);
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

function Square(_l) {
    Shape.call(this, _l, _l);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.calculatePreimeter = function () {
    return this.width * 4;
}

let sq1 = new Square(5);
console.log("Area: " + sq1.calculateArea());
console.log("Preimeter: " + sq1.calculatePreimeter());
console.log("----------------------------");

// Can't create instant from shape
// let sh = new Shape(); //error
