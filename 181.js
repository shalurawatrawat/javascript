function fetchData() {
    return new Promise((resolve, reject) => {
      console.log("Fetching data...");
      setTimeout(() => {
        resolve({ id: 1, name: "John Doe", age: 25 });
      }, 2000); 
    });
  }
  function processData(data) {
    return new Promise((resolve, reject) => {
      console.log("Processing data...");
      setTimeout(() => {
        if (data.age < 18) {
          reject(new Error("User is underaged."));
        } else {
          data.isAdult = true;
          resolve(data);
        }
      }, 2000);
    });
  }
  function saveData(data) {
    return new Promise((resolve) => {
      console.log("Saving data...");
      setTimeout(() => {
        console.log("Data saved successfully.");
        resolve(data);
      }, 2000); 
    });
  }
  fetchData()
    .then((data) => processData(data))
    .then((processedData) => saveData(processedData))
    .then((finalData) => {
      console.log("Final Data:", finalData);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  