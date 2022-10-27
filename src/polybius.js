// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //create an object with key:value pairs that will represent the polybius square
  let polybiusSquare = {
    "a": 11, "b": 21,"c": 31,"d": 41,"e": 51,"f": 12,"g": 22,"h": 32,"i": 42, "j": 42, "k": 52,"l": 13,"m": 23,"n": 33,"o": 43,"p": 53,"q": 14,"r": 24,"s": 34,"t": 44,"u": 54,"v": 15,"w": 25,
    "x": 35,"y": 45,"z": 55
  }
  let revPolibiusSquare = {
    "11": "a", "21": "b","31": "c","41": "d","51": "e","12": "f","22": "g","32": "h","42": "i/j", "52": "k","13": "l","23": "m","33": "n","43": "o","53": "p","14": "q","24": "r","34": "s","44": "t","54": "u","15": "v","25": "w",
    "35": "x","45": "y","55": "z"
  }
  function polybius(input, encode = true) {
    // "message"; => "23513434112251"
    //we have to transform the input to be lowercased to handle the error of capital letters
    let lowercasedInput = input.toLowerCase()
    //we have to set a result variable set to a empty string
    let result = ""
    //we have to handle two cases, if encode exists/ === true
    if(encode){
      //we have to loop through each character in the lowercasedInput
      for(let i = 0; i < input.length ; i++){
        //we have to handle the error if there is a space included in the input
        if(lowercasedInput[i] === " "){
          result += " "
        }
        //we have to somehow find a letter within the polybiusSquare variable and return its value to our empty result variable
        else{
          result += polybiusSquare[lowercasedInput[i]]
        }
      }
    }
    //if encode doesn't exists/=== false
    if(encode === false){
      //somehow I need to return false if the total number of characters in the input string, excluding spaces, is an odd number
      //but first we have to get rid of any spaces in the input string 
      let noSpace = input.replace(" ", "")
      if(noSpace.length%2!==0){
        return false;
      }
      //repeat steps from the previos if statement, but do the opposite process
      for(let i = 0; i < input.length ; i+=2){
        //2345 23513434112251
        //we also have to loop through and combine the indexes of the input so I can return a pair of numbers
        //we have to handle the error if there is a space included in the input
        if(input[i] === " "){
          result += " "
          //we also have to make sure we're handling the error to not have i read a space character
          i--
        }
        else{
          //we have to somehow send to the empty result string the keys of the polybius square of the input characters that match it
          //we have to create a pair of numbers since we're working with two numbers in order to match the specific letter value
          let numPair = `${input[i]}${input[i + 1]}`
          result += revPolibiusSquare[numPair];
          // Object.keys(polybiusSquare).find(key => polybiusSquare[key] === numPair);
      }
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
