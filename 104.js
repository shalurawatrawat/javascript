let str=" shalu rawat!";
let substring ="rawat!";

let endwith=str.slice(-substring.length)===substring;
if(endwith){
    console.log("String ends with substring");
}
else{
    console.log("String does not ends with substring");
}
