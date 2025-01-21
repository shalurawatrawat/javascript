const fs = require("fs");
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err); 
      } else {
        resolve(data); 
      }
    });
  });
}
const filePath = "./example.txt"; 
readFileAsync(filePath)
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err.message);
  });