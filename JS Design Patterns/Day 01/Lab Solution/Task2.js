/*
    2 - You have been hired to develop an application for a car shop.
        The owner of the car shop wants an easy to navigate interface with the ability 
        to document all the types of vehicles that he fixes in his shop.On a daily basis, 
        through his and his employers hands pass around dozen different types of vehicles.
        You need to find a clean and concise way to insert all those types of cars into your database.
*/

class Car {

}

class Truck {

}

class Van {

}


class vehiclesFactory {
    constructor() {
    }

    createVechile(vechileType) {
        switch (vechileType) {
            case "Car":
                return new Car();

            case "Truck":
                return new Truck();

            case "Van":
                return new Van();
        }
    }
}

let todayVehicles = [];

let workPlace = new vehiclesFactory();
todayVehicles.push(workPlace.createVechile("Car"));

todayVehicles.push(workPlace.createVechile("Truck"));

todayVehicles.push(workPlace.createVechile("Van"));


console.log(todayVehicles);