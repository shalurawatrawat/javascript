function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

console.log(removeDuplicates('shalu rawat')); 
console.log(removeDuplicates('hello world')); 
console.log(removeDuplicates('aabbcc'));