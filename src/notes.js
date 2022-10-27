for(let i = 0; i < input.length; i++){
    for(let j = 0; j < alphabet.length; j++){
      if(input[i] === alphabet[j]){
        newInput += alphabet[j + shift]
      }
    }
  }


  alphabet.map(letter =>{
    for(let i = 0; i < input.length; i++){
      return letter === input[i]
    }
  })