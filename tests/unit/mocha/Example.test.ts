import { expect } from "chai";

describe("Array", function() {
  describe("length", () => {
    it("gets the length", function() {
      const arr = [1, 2, 3];

      expect(arr.length).equal(3);
    });
  });
});
