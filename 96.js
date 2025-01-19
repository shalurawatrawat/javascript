
function countCharacters(str) {
  const charCounts = {};
  for (const char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  return charCounts;
}

