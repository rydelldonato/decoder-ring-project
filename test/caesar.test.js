// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// const data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

describe("caesar()", () =>{
    it("should return false if the shift amount is 0", () =>{
        const expected = false;
        const response = caesar(input = "message", shift = 0, encode = true)

        expect(response).to.equal(expected);
    })

    it("should return false if the shift amount is less than -25", () =>{
        const expected = false;
        const response = caesar(input = "message", shift = -26, encode = true)

        expect(response).to.equal(expected);
    })

    it("should return false if the shift amount is greater than 25", () =>{
        const expected = false;
        const response = caesar(input = "message", shift = 26, encode = true)

        expect(response).to.equal(expected);
    })

    it("should encode a message by shifting the letters", () => {
        const message = "message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "phvvdjh";
  
        expect(actual).to.equal(expected);
      });

      it("should leaves spaces and other symbols as is", () => {
        const message = "a message.";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh.";
  
        expect(actual).to.equal(expected);
      });

      it("should ignore capital letters", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";
  
        expect(actual).to.equal(expected);
      });
  
      it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "zebra magazine";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "cheud pdjdclqh";
  
        expect(actual).to.equal(expected);
      });
  
      it("should allow for a negative shift that will shift to the left", () => {
        const message = "zebra magazine";
        const shift = -3;
        const actual = caesar(message, shift);
        const expected = "wbyox jxdxwfkb";
  
        expect(actual).to.equal(expected);
      });

      it("should decode a message by shifting the letters in the opposite direction", () => {
        const message = "phvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "message";
  
        expect(actual).to.equal(expected);
      });

      it("should leaves spaces and other symbols as is", () => {
        const message = "d phvvdjh.";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message.";
  
        expect(actual).to.equal(expected);
      });
  
      it("should ignore capital letters", () => {
        const message = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message";
  
        expect(actual).to.equal(expected);
      });
  
      it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "cheud pdjdclqh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";
  
        expect(actual).to.equal(expected);
      });
  
      it("should allow for a negative shift that will shift to the left", () => {
        const message = "wbyox jxdxwfkb";
        const shift = -3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";
  
        expect(actual).to.equal(expected);
      });
})