function checkEamil(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw new Error("Invalid email format");
    }
    return 'email is vaild';
}
try{
let email='sanju@gmail.com';
let result=checkEamil(email);
console.log(result);
}catch(e){
    console.log(e.message);
}