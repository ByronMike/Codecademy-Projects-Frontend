var assert = require("assert");
var Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returs a rooster call", () => {
      // Define expected output
      const expected = "moo!";

      // Call Rooster.announceDawn and store result in variable
      let result = Rooster.announceDawn();

      // Use an assert method to compare actual and expected result
      assert.equal(expected, result);
    });
  });
  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      // Define expected output
      const hour = 9;
      const expected = hour.toString();

      // Call Rooster.announceDawn and store result in variable
      let result = Rooster.timeAtDawn(9);

      // Use an assert method to compare actual and expected result
      assert.strictEqual(expected, result);
    });
    it("throws an error if passed a number less than 0", () => {
      // Define expected output
      const hour = -2;
      // Use an assert method to compare actual and expected result
      const expected = hour.toString;
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
    it("throws an error if passed a number greater than 23", () => {
      // Define expected output
      const hour = 24;
      // Use an assert method to compare actual and expected result
      const expected = hour.toString;
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
  });
});
