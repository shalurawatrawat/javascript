function rotateArray(arr, n) {
    const len = arr.length;
    if (len === 0) return arr;
    n = n % len;
    if (n < 0) {
      n = len + n;
    }
    const rotated = [];
      for (let i = 0; i < len; i++) {
          rotated.push(arr[(i + n) % len]);
      }
      return rotated;
  }
  let a=[1,3,4,5,5,6];
  let re=rotateArray(a,1);
  console.log(re);


  