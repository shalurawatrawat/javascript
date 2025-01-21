function number(a, b, callback) {
    return callback(a, b);
  }
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;
  
  let res = number(5, 5, add); 
  console.log(res);
  
  res = number(10, 3, subtract); 
  console.log(res); 