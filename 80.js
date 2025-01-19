function isKeithNumber(number) {
    const digits = Array.from(String(number), Number);
    let currentSequence = [...digits];
  
    while (true) {
      const nextTerm = currentSequence.reduce((sum, digit) => sum + digit, 0);
      if (nextTerm === number) {
        return `${number} is a Keith number.`;
      }
      if (nextTerm > number) {
        return `${number} is not a Keith number.`;
      }
      currentSequence.push(nextTerm);
      currentSequence.shift();
    }
  }
  console.log(isKeithNumber(197)); 
  