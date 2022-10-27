// Write your tests here!
const {expect} = require('chai');
const {polybius} = require('../src/polybius');

describe("polybius()", ()=>{
    
    describe("encoding the input--when encode is set to true", ()=>{
        it("should encode the given input correctly", ()=>{
            const expected = "23513434112251";
            const actual = polybius("message", encode = true)
    
            expect(actual).to.equal(expected);
        })
    
        it("should add any spaces included in input", ()=>{
            const expected = "2345 23513434112251"
            const actual = polybius("my message")
    
            expect(actual).to.equal(expected);
        })
    
        it("should encode i/j correctly", () =>{
            const expected = "424222221351"
            const actual = polybius("jiggle") 
    
            expect(actual).to.equal(expected);
        })
    })

    describe("decoding the input--when encode is set to false", ()=>{
        it("decode the input", ()=>{
            const expected = "message"
            const actual = polybius("23513434112251", false)

            expect(actual).to.equal(expected);
        })

        it("should add any spaces that were included in the input", ()=>{
            const expected = "my message"
            const actual = polybius("2345 23513434112251", false) 

            expect(actual).to.equal(expected);
        })

        it("should translate 42 to both 'i' and 'j'", ()=>{

            const actual = polybius("424222221351", false)

            expect(actual).to.include('i');
            expect(actual).to.include('j');
        })

        it("should return false if length of just the numbers-not including spaces-is an odd number", ()=>{
            const expected = false;
            const actual = polybius("2345 235134341122514", false)

            expect(actual).to.equal(expected);
        })
    })

})