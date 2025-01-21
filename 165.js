import { email,phone} from "./data_validtion.js";
try{
    let Email='sanju@gmail.com';
    let Phone='9610414219';
    console.log(email(Email));
    console.log(phone(Phone));
}catch(e){
    console.log(e.message);
}