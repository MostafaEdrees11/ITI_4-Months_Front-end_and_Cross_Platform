/*
    4 - In this challenge, you have to implement a configuration that uses the singleton pattern.
        You are given a class ConfigureVals. Define it as follows:
        It should have a constructor that defines the properties xpoint, ypoint, and shape.
        The constructor should initialize xpoint, ypoint, and shape to 0, 0, null if the values 
        for these properties are not passed to the constructor.
        Make sure that only a single instance of the class can be made by defining the function getConfiguration.
*/

class ConfigureVals {
    constructor(xPoint = 0, yPoint = 0, shape = null) {

        if (ConfigureVals.configurations) {
            return ConfigureVals.configurations;
        }

        this.xPoint = xPoint;
        this.yPoint = yPoint;
        this.shape = shape;
        ConfigureVals.configurations = this;
    }

    getConfiguration() {
        return `xPoint: ${this.xPoint}, 
yPoint: ${this.yPoint}, 
shape: ${this.shape},`
    }
}

let shape = new ConfigureVals(5, 3, "Rectangle");
let anthorShape = new ConfigureVals(2, 2, "Square");
console.log(shape.getConfiguration());
console.log("---------------");
console.log(anthorShape.getConfiguration());