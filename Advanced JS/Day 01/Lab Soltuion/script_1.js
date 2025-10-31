function Rectangle(_width, _height) {

    this.width = _width;
    this.height = _height;

    Rectangle.counter++;
}

Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
}

Rectangle.prototype.calculatePreimeter = function () {
    return (this.width + this.height) * 2;
}

Rectangle.counter = 0;
Rectangle.getCounter = function () {
    return Rectangle.counter;
}

Rectangle.prototype.toString = function () {
    return `width: ${this.width}, height: ${this.height}, area: ${this.calculateArea()}, preimeter: ${this.calculatePreimeter()}`;
}

let rect1 = new Rectangle(5, 6);
console.log("Area: " + rect1.calculateArea());
console.log("Preimeter: " + rect1.calculatePreimeter());

console.log("Num of Rectangles: " + Rectangle.getCounter());

console.log(rect1.toString());