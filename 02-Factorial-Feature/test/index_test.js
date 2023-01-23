var assert = require("assert");
var Calculate = require("../index.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    it("will test if the output of 5! is equal to 120", () => {
      // Setup
      const input = 5;
      const expected = 120;
      // Exercise
      const result = Calculate.factorial(input);
      // Verify
      assert.equal(result, expected);
    });
    it("will test if the output of 3! is equal to 6", () => {
      const input = 3;
      const expected = 6;

      const result = Calculate.factorial(input);

      assert.equal(result, expected);
    });
    it("returns 1 when you pass in 0.", () => {
      const input = 0;
      const expected = 1;

      const result = Calculate.factorial(input);

      assert.equal(result, expected);
    });
  });
});
