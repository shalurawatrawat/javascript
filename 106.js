function removePunctuation(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  }
  let re=removePunctuation('hello,&*``world!');
  console.log(re);


  