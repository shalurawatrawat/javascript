function wordFrequency(str) {
    const wordMap = new Map();
    const words = str.toLowerCase().split(/\s+/);
    for (const word of words) {
      if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
      } else {
        wordMap.set(word, 1);
      }
    }
    return wordMap;
  }
  const text = "This is a test. This test is only a test.";
  const frequencyMap = wordFrequency(text);
  
  for (const [word, count] of frequencyMap) {
    console.log(`${word}: ${count}`);
  }