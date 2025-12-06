/*
    1 - Consider that we have A store that sell products and  every day the store put new products into
        the store and the store want to let every people that interested with store that new product is in the store now.
*/

class Store {
    constructor(storeName) {
        this.name = storeName;
        this.followers = [];
    }


    follow(user) {
        this.followers.push(user);
    }

    unFollow(user) {
        this.followers = this.followers.filter((follower) => follower != user);
    }

    addNewProduct(productTitle) {
        this.followers.forEach((follower) => follower.notify(productTitle, this.name));
    }
}

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    notify(productTitle, storeName) {
        console.log(`Notify ${this.name} with ${productTitle} product from ${storeName} store.`)
    }
}


let closesStore = new Store("X");
let follower1 = new User("mostafa", "mostafa@gmail.com");
let follower2 = new User("ali", "ali@gmail.com");

closesStore.follow(follower1);
closesStore.follow(follower2);

closesStore.addNewProduct("T-shirt");