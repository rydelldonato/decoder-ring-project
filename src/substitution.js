// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //we have to create a variable containing an object containing the alphabet which we'll reference during our encoding process
  let numAlpha = {
    "a": 0, "b": 1,"c": 2,"d": 3,"e": 4,"f": 5,"g": 6,"h": 7,"i": 8, "j": 9, "k": 10,"l": 11,"m": 12,"n": 13,"o": 14,"p": 15,"q": 16,"r": 17,"s": 18,"t": 19,"u": 20,"v": 21,"w": 22, "x": 23,"y": 24,"z": 25
  }
  //we have to create a variable containing an array which we'll reference later for our decoding process
  let decoder = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function substitution(input = "", alphabet = "", encode = true) {
    // your solution code here
    //we have to return early if the alphabet variable length !== 26, and return false
    if(alphabet.length !== 26) return false
    //we have to transform the input to all lowercased 
    let lowercasedInput = input.toLowerCase()
    //we have to check if tne alphabet contains unique characters, if not return false
    //we will have to loop through the alphabet input two different times to check if any of the characters repeat or equal each other
    for(let i = 0; i < alphabet.length; i++)
        for(let j = i + 1; j < alphabet.length; j++)
            if (alphabet[i] == alphabet[j])
                return false;
    //we have to create an empty result string to return later
    let result = ""
    //we have to take care of the encode process, if encode is true
    if(encode){
      //we have to loop through each character in the input string
      for(let i = 0; i < input.length ; i++){
        //now that we're looping through each individual character in input, we have to check if any of these are a space
        if(lowercasedInput[i] === " "){
          //if a charactet equals a space we need to add that space onto the result variable
          result += " "
          //we also have to make sure we're not still reading that same character later in this loop
          i++
        }
        //we have to somehow connect the specific lowercasedInput character to the value it'd represent in our numAlpha object
        let alphabetIndex = numAlpha[lowercasedInput[i]]
        //we have to add this now to our result variable
        result += alphabet[alphabetIndex]
      }
    }
    //we have to take care of the decode process
    if(!encode){
      //repeat the encode process except reverse some processes
      //we have to loop through each character in the input string
      for(let i = 0; i < input.length ; i++){
        //inside of this loop, we have to also loop through the characters in the alphabet string 
        for(let j = 0; j < alphabet.length ; j++){
          //before moving on, we have to cover the edge case of the the input including a space
          if(lowercasedInput[i] === " "){
            result += " "
            i++
          }
          //we have to check now when the input character matches the alphabet, somehow connect it with our decoder variable
          if(lowercasedInput[i] === alphabet[j]){
            //add that macthing decoder variable value to the result
            result += decoder[j]
          }
        }
      }

    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
