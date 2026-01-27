const { capitalizeTextFirstChar } = require("../lab1.js");

describe("Test capitalizeTextFirstChar function", () => {
    it("test that the function takes a string it will return type to be a string", () => {
        expect(capitalizeTextFirstChar("mostafa")).toEqual(jasmine.any(String));
    })

    it("test that the function takes a string and return it after capitalize it", () => {
        expect(capitalizeTextFirstChar("mostafa")).toBe("Mostafa");
    })

    it("test if the function takes number it will throw type error says parameter should be string", () => {
        expect(() => capitalizeTextFirstChar(5)).toThrowError(
            TypeError,
            "parameters should be string"
        )
    })
});