function sortStrings(array, comparisonCallback) {
    return array.sort(comparisonCallback);
  }
  const strings = ["apple", "orange", "banana", "grape", "pear"];
  const ascendingOrder = (a, b) => a.localeCompare(b);
  const descendingOrder = (a, b) => b.localeCompare(a);
  
  console.log("Ascending Order:", sortStrings(strings, ascendingOrder));
  console.log("Descending Order:", sortStrings(strings, descendingOrder));