let a = [1, 2, 3, 4, 5, 6];
let b = [1, 2,9];
let found = true;

for (let i = 0; i < b.length; i++) {
    let elementFound = false; 
    
    for (let j = 0; j < a.length; j++) {
        if (b[i] == a[j]) {
            elementFound = true; 
            break; 
        }
    }
    
    if (elementFound==false) { 
        found = false;
        break;
    }
}
if (found) {
    console.log('Subset');
} else {
    console.log('Not Subset');
}
