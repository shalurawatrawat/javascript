function mergeMaps(map1, map2) {
    return new Map([...map1, ...map2]);
  }
  const map1 = new Map([
    ['name', 'Sanju'],
    ['age', 22],
  ]);
  const map2 = new Map([
    ['age', 23], 
    ['profession', 'Developer']
  ]);
  const mergedMap = mergeMaps(map1, map2);
  console.log(mergedMap);