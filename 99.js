function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  let str='abc ab abcd';
  let res=findLongestWord(str);
  console.log(res);