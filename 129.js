const splitArrayAtIndex = (array, index) => {
    if (index < 0 || index > array.length) {
      throw new Error("Index is out of bounds");
    }
    const firstPart = array.slice(0, index);
    const secondPart = array.slice(index);
    return [firstPart, secondPart];
  };
  
  let a=[1,2,3,4,5,6];
  let re=splitArrayAtIndex(a,2);
  console.log(re);