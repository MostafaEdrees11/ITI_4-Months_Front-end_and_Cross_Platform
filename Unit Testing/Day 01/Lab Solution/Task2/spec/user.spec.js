const User = require("../lab2.js");

describe("Test addToCart Method", () => {
    let user;

    beforeEach(() => {
        user = new User("Mostafa", "1234");
    });

    it("add product to cart", () => {
        const product = { name: "Item", price: 100 };

        user.addToCart(product);
        expect(user.cart).toContain(product);
    });
});

describe("Test calculateTotalCartPrice Method", () => {
    let user;

    beforeEach(() => {
        user = new User("Mostafa", "1234");
    });

    it("check total cart price", () => {
        user.addToCart({ name: "Item1", price: 100 });
        user.addToCart({ name: "Item2", price: 50 });
        user.addToCart({ name: "Item3", price: 10 });
        user.addToCart({ name: "Item4", price: 300 });

        expect(user.calculateTotalCartPrice()).toBe(460);
    })
})

describe("Test checkout Method", () => {
    let user;

    beforeEach(() => {
        user = new User("Mostafa", "1234");
    });

    it("Test checkout while faking paymentModel while verify is true", () => {
        let fakePaymentModel = jasmine.createSpyObj(['goToVerifyPage', 'returnBack', 'isVerify']);
        fakePaymentModel.goToVerifyPage.and.returnValue("");
        fakePaymentModel.isVerify = fakePaymentModel.returnBack.and.returnValue(true);

        expect(user.checkout(fakePaymentModel)).toBeTrue();
        // expect(user.checkout(fakePaymentModel)).toBeFalse();
        expect(fakePaymentModel.goToVerifyPage).toHaveBeenCalled();
        expect(fakePaymentModel.returnBack).toHaveBeenCalled();
    })

    it("Test checkout while faking paymentModel while verify is false", () => {
        let fakePaymentModel = jasmine.createSpyObj(['goToVerifyPage', 'returnBack', 'isVerify']);
        fakePaymentModel.goToVerifyPage.and.returnValue("");
        fakePaymentModel.isVerify = fakePaymentModel.returnBack.and.returnValue(false);

        expect(user.checkout(fakePaymentModel)).toBe(false);
        // expect(user.checkout(fakePaymentModel)).toBe(true);
    })
})