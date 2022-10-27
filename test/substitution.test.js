// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("Substitution() function", ()=>{
    describe("should encode a message", ()=>{
        it("should return false early if the alphabet variable does not equal 26",()=>{
            const expected = 26;
            const alphabet = "abc"
            const actual = alphabet.length === expected;

            expect(actual).to.be.false;
        })

        it("should return false if the alphabet variable is missing", ()=>{
            const actual = substitution(alphabet = "",encode ===  true, input)
            
            expect(actual).to.be.false;
        })

        it("should return false if the alphabet variable doesn't include special characters", ()=>{
            const alphabet = "abcabcabcabcabc";
            const message = "message";
            const actual = substitution(alphabet,message,encode === true)

            expect(actual).to.be.false;
        })

        it("should encode a the message using the given alphabet input", ()=>{
            const message = "message";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const expected = "ykrrpik";


            const actual = substitution(message, alphabet, encode === true);

            expect(actual).to.equal(expected);
        })

        it("should work with any types of special characters", ()=>{
            const input = "message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet);
            const expected = "ysii.rs";

            expect(actual).to.equal(expected);
        })

        it("should preserve any spaces included in the input variable", ()=>{
            const input = "my message";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(input, alphabet);
            const expected = "yp ysii.rs";

            expect(actual).to.equal(expected);
        })
    })

    describe("should decode the given input using the given alphabet", ()=>{
        
        it("should decode a message by using the given substitution alphabet", () => {
            const message = "ykrrpik";
            const alphabet = "plmoknijbuhvygctfxrdzeswaq";
            const actual = substitution(message, alphabet, false);
            const expected = "message";
      
            expect(actual).to.equal(expected);
          });
      
          it("should work with any kind of key with unique characters", () => {
            const message = "ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "message";
      
            expect(actual).to.equal(expected);
          });
      
          it("should preserve spaces", () => {
            const message = "yp ysii.rs";
            const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
            const actual = substitution(message, alphabet, false);
            const expected = "my message";
      
            expect(actual).to.equal(expected);
          });
    })
})