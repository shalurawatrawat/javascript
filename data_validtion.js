export let email=(email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }
    return true;
}

export let phone=(phone)=>{
    if(phone.length>10 || phone.length<10){
        throw new Error("phone number should be length 10");
    }
    return true;
}