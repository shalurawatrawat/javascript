const updateMapValue = (map, key, value) => {
    if (map.has(key)) {
      map.set(key, value);
      return `Key "${key}" updated successfully.`;
    } else {
      return `Key "${key}" does not exist in the map.`;
    }
  };
  const myMap = new Map([
    ['name', 'Sanju'],
    ['age', 22],
    ['profession', 'Software Developer']
  ]);
  console.log(myMap);
  console.log(updateMapValue(myMap, 'age', 23));
  console.log(updateMapValue(myMap, 'address', 'Ajmer')); 
  console.log(myMap);