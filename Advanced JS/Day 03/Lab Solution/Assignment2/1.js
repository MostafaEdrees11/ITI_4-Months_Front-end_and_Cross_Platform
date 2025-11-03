function createCounter() {
    let i = 0;

    return function () {
        i++;
        return i;
    }
}

let increase1 = createCounter();
let increase2 = createCounter();

console.log(increase1()); //1
console.log(increase1()); //2 because of closure save values of i

console.log(increase2()); //1
console.log(increase2()); //2