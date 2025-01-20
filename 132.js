function setUnion(setA, setB) {
    const unionSet = new Set(setA);
    for (const elem of setB) {
      unionSet.add(elem);
    }
    return unionSet;
  }
  const set1 = new Set([1, 2, 3]);
  const set2 = new Set([3, 4, 5]);
  
  const unionSet = setUnion(set1, set2);
  console.log(unionSet);

  