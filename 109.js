const truncateString = (str, length) => {
    if (str.length <= length) {
      return str;
    }
    return str.slice(0, length) + '...';
  };
  var re=truncateString('hello',3);
  console.log(re);