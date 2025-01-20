function findIntersection(setA, setB) {
    const intersectionSet = new Set();
    for (const elem of setA) {
      if (setB.has(elem)) {
        intersectionSet.add(elem); 
      }
    }
    return intersectionSet;
  }
  
  const set1 = new Set([1, 2, 3, 4]);
  const set2 = new Set([3, 4, 5, 6]);
  
  const intersectionSet = findIntersection(set1, set2);
  console.log(intersectionSet);
  