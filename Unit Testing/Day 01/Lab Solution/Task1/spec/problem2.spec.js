const { createArray } = require("../lab1.js");

describe("Test createArray Function", () => {
    it("test that the return value of type array", () => {
        expect(createArray(7).toEqual(jasmine.any(Array)));
    })

    it("test if we pass 2 it will return array of length 2 and test it includes 1", () => {
        const result = createArray(2);
        expect(result.length).toBe(2);
        expect(result).toContain(1);
    })

    it("test if we pass 3 it will return array of length 3 and test it doesn't include 3"), () => {
        const result = createArray(3);
        expect(result.length).toBe(3);
        expect(result).not.toContain(3);
    }
})