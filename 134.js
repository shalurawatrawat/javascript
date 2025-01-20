function findDifference(setA, setB) {
    const differenceSet = new Set();
    for (const elem of setA) {
      if (!setB.has(elem)) {
        differenceSet.add(elem); // Add the element if it's not in setB
      }
    }
    return differenceSet;
  }
  const set1 = new Set([1, 2, 3, 4]);
  const set2 = new Set([3, 4, 5, 6]);
  
  const differenceSet = findDifference(set1, set2);
  console.log(differenceSet); 