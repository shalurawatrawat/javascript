function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

console.log(removeDuplicates('sanju singh')); 
console.log(removeDuplicates('hello world')); 
console.log(removeDuplicates('aabbcc'));