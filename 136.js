function isSubset(setA, setB) {
    for (const elem of setA) {
      if (!setB.has(elem)) {
        return false; 
      }
    }
    return true; 
  }
  const set1 = new Set([1, 2, 3]);
  const set2 = new Set([1, 2, 3, 4, 5]);
  
  console.log(isSubset(set1, set2)); 