function isBalanced(string) {
    let stack = [];

    for (let char of string) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length === 0) {
                return "Not Balanced";
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? "Balanced" : "Not Balanced";
}

console.log(isBalanced("(())")); 
console.log(isBalanced("(()"));
console.log(isBalanced("())("));
console.log(isBalanced(""));
