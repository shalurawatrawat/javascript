let str='12345';
let isonlydigitys='true';
for(let  i=0;i<str.length;i++){
    if(str[i]<'0'||str[i]>'9'){
        isonlydigitys=false;
        break;
    }
}

if(isonlydigitys&&str.length>0){
    console.log("thise string contains digits");

}else{
    console.log("thise string contains digits");
}

