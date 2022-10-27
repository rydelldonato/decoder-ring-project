// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
//a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
//0,...............................................,25
  function caesar(input, shift, encode = true) {
    //if shift === 0 || shift < -25 || shift > 25, return false
    if(shift === 0 || shift < -25 || shift > 25) return false;
    //create an array alphabet to reference for this function
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    //0     1    2    3    4    5    6    7    8    9   10    11   12   13   14   15   16   17  18    19   20   21   22   23   24   25  
    //we have to take handle the error if there are any upper-case letters in the input string
    let lowercasedInput = input.toLowerCase()
    //we have to declare a variable that will hold the encoded or decoded string
    let newInput = "";
    //we have to handle the error if encode exists, it's automatically set to be true
    //if encode === true, positive # shift right and negative # shift left
    if(encode){
      //we have to somehow loop through each character in the lowercasedInput
      for(let i = 0; i < lowercasedInput.length; i++){
        //we have to handle the error if the specific character in the lowercasedInput is a space
        if(lowercasedInput[i] === " "){
          newInput += " "
        }
        //we have to handle the error if the specific character in the lowercasedInput is a period
        if(lowercasedInput[i] === "."){
          newInput += "."
        }
        //we have to somehow loop through each character in our alphabet array as we crosscheck the characters with the lowercasedInput
        for(let j = 0; j < alphabet.length; j++){
        //we have to check when the specific character in lowercasedInput is equal to the character in the alphabet array 
        //and if so, we have to figure out a way to then take that character and apply the encode shift to it
        //and then return that encode shifted character to the newInput empty string we created
          if(lowercasedInput[i] === alphabet[j]){
        //we have to handle the error if the shift goes past index 25
        //we have to write the condition in a way that will check if the encode shift goes past 25
            if(j + shift > 25){
              //we have to figure out a way to bring j back to the beginning of the alphabet array before applying the encode shift
              //also, take that newly encoded character and add it to the newInput string
              newInput += alphabet[j-26 + shift]
            }
            //we have to handle the error if the shift goes past index 25 
            else if (j + shift < 0){
              //we have to figure out a way to bring j back out of a negative value before applying the encode shift
              //also, take that newly encoded character and add it to the newInput string
              newInput += alphabet[j+26 + shift]
            }
            else{
              //I want to replace each letter in the given input variable string with its letter in the alphabet plus "shift" value
              //I want to return this newly encoded character and add it as a character in the newInput variable
              newInput += alphabet[j + shift]
            }
          }
        }
      }
      //return an encoded input
    }
  //we have to handle the error if encode === false or does not exists
  if(!encode){
    //if encode === false, positive # shift left and negative # shift right
    //now, the content of when encode === false will simply almost opposite of how we shifted when encode === true
    //instead of shifting one way, we have to shift the other way
    for(let i = 0; i < lowercasedInput.length; i++){
      if(lowercasedInput[i] === " "){
        newInput += " "
      }
      if(lowercasedInput[i] === "."){
        newInput += "."
      }
      for(let j = 0; j < alphabet.length; j++){
        if(lowercasedInput[i] === alphabet[j]){
          //if shift goes past 25
          if(j - shift > 25){
            //
            newInput += alphabet[j-26 - shift]
          }
          else if (j - shift < 0){
            newInput += alphabet[j+26 - shift]
          }
          else{
            //I want to replace each letter in the given input variable string with its letter in the alphabet minus "shift" value
            newInput += alphabet[j - shift]
          }
        }
      }
    }
  }
  //return a decoded or encoded input
    return newInput;
  }
/*caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'*/
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
