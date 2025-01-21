export const multiply=(a,b)=> a*b;
export default function divide(a,b){
    if(b==0) throw new Error('cannot divide by zero');
    return a/b;
}
  
  
  