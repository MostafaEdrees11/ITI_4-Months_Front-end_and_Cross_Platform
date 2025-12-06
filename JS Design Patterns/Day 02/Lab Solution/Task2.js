/*
    2 - Suppose that we play playstation football game and during the game we want to change the game plan
        (attack - defence - meduim)
*/

class game {
    play() {

    }
}

class attack extends game {
    constructor(numOfAttakers) {
        super();
        this.numOfAttakers = numOfAttakers;
    }

    play() {
        return `attack with ${this.numOfAttakers} players`;
    }
}

class meduim extends game {
    constructor(numOfMediums) {
        super();
        this.numOfMediums = numOfMediums;
    }

    play() {
        return `medium with ${this.numOfMediums} players`;
    }
}

class defence extends game {
    constructor(numOfDefenders) {
        super();
        this.numOfDefenders = numOfDefenders;
    }

    play() {
        return `defence with ${this.numOfDefenders} players`;
    }
}


class PlayPlan {
    constructor(planType) {
        this.plan = planType;
    }

    applyPlan() {
        return this.plan.play();
    }
}

let plan = new attack(5);

let coach = new PlayPlan(plan);
console.log(coach.applyPlan())