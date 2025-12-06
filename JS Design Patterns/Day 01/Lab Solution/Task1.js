/*
    1 - You have asked to develop an application for a company X.
        The company has only one chief executive officer(CEO).The
        application store been some information a bout the CEO like: name,
        age and address.You need to find a clean and concise
        implementation of the CEO class in the application.
*/

class Company {
    constructor(ceo) {
        if (!Company.ceo) Company.ceo = ceo;
    }

    getCEOInformation() {
        return `Name: ${Company.ceo.name}, Age: ${Company.ceo.age}, Address: ${Company.ceo.address}`;
    }
}

class CEO {
    constructor(name, age, address) {
        if (CEO.ceoInstance)
            return CEO.ceoInstance;

        CEO.ceoInstance = this;
        CEO.ceoInstance.name = name;
        CEO.ceoInstance.age = age;
        CEO.ceoInstance.address = address;
    }
}

let ceoMostafa = new CEO("Mostafa", 23, "Gharabia");
let myCompany = new Company(ceoMostafa);

console.log(myCompany.getCEOInformation());