const reverseAlphabet = (str) => {
    const match = str.match(/^([a-zA-Z]+)(\d+)$/);
    if (match) {
      const str = match[1];
      const num = match[2];
     
      const reverseString = str.split('').reverse().join('')
      return reverseString + num;
    } 
    
    return 'Invalid Input'
}

console.log(reverseAlphabet('NEGIE1')) // EIGEN1
console.log(reverseAlphabet('SJTCAER456')) // REACTJS456

