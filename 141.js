function objectToMap(obj) {
    return new Map(Object.entries(obj));
  }

  let obj = {
    name: "John",
    age: 30,
    country: "USA",
  };
  const map = objectToMap(obj);
  console.log(map);