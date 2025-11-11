// create class veichle (name, speed, color) and sub classes like bike, car
// enable function in sub classes name it move
// while calling it car, bike move to right if car or bike  arrived to right of page it turn to left
// each of them moved by its speed.

class Veichle {
    constructor(_name, _speed, _color) {
        this.name = _name;
        this.speed = _speed;
        this._color = _color;
    }
}

class Bike extends Veichle {
    move() {
        if (!reverseCar) {
            moveCarRight();
        } else {
            moveCarLeft();
        }
    }
}

class Car extends Veichle {
    move() {
        if (!reverseBike) {
            moveBikeRight();
        } else {
            moveBikeLeft();
        }
    }
}

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let carPosition = 0, bikePostion = 0;
let reverseCar = false, reverseBike = false;
let car = document.querySelector("#car");
let bike = document.querySelector("#bike");
let carIntervalId = null, bikeIntervalId = null;

let myCar = new Car("BMW", 20, "black");
let myBike = new Bike("Race", 10, "Red");

startButton.addEventListener('click', (e) => {
    carIntervalId ??= setInterval(myCar.move, myCar.speed);
    bikeIntervalId ??= setInterval(myBike.move, myBike.speed);
})

function moveCarRight() {
    if (carPosition < window.innerWidth - 100) {
        carPosition += 5;
        car.style.left = carPosition + 'px';
    } else {
        reverseCar = true;
    }
}

function moveCarLeft() {
    if (carPosition > 10) {
        carPosition -= 5;
        car.style.left = carPosition + 'px';
    } else {
        reverseCar = false;
    }
}


function moveBikeRight() {
    if (bikePostion < window.innerWidth - 100) {
        bikePostion += 5;
        bike.style.left = bikePostion + 'px';
    } else {
        reverseBike = true;
    }
}

function moveBikeLeft() {
    if (bikePostion > 10) {
        bikePostion -= 5;
        bike.style.left = bikePostion + 'px';
    } else {
        reverseBike = false;
    }
}

stopButton.addEventListener('click', () => {
    car.style.left = 0;
    bike.style.left = 0;
    carPosition = 0;
    bikePostion = 0;
    reverseCar = false;
    reverseBike = false;
    clearInterval(carIntervalId);
    clearInterval(bikeIntervalId);
    bikeIntervalId = carIntervalId = null;
})