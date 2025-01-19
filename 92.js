let str="hello world";
let char=str.split('');
let vovel=0;
for(i=0;i<char.length;i++){
    if(char[i]=='a'||char[i]=='e'||char[i]=='i'||char[i]=='o'||char[i]=='u'){
        vovel++;
    }
}
console.log(vovel);