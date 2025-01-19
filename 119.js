
function countFrequencyWithMap(arr) {
    const frequency = new Map();
    for (const item of arr) {
      frequency.set(item, (frequency.get(item) || 0) + 1);
    }
    return frequency;
  }
  const array = [1, 2, 2, 3, 3, 3, 4];
  const result = countFrequencyWithMap(array);
  console.log(Object.fromEntries(result));