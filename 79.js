function isAutomorphic(number) {
    const square = number * number;
    const numStr = number.toString();
    const squareStr = square.toString();
    if (squareStr.endsWith(numStr)) {
      return `${number} is automorphic.`;
    } else {
      return `${number} is not automorphic.`;
    }
  }

  const number = 25;
  console.log(isAutomorphic(number)); 