const pad = (str, length) => {
    str = String(str);
    while (str.length < length) {
      str = '0' + str;
    }
    return str;
  };
  let re=pad('H',4);
  console.log(re);