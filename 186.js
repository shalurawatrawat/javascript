const fs = require('fs/promises');
async function readFileAndProcess(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const wordCount = data.split(/\s+/).filter(word => word).length;

    console.log(`File content:\n${data}`);
    console.log(`Word count: ${wordCount}`);
    
    return wordCount;
  } catch (error) {
    console.error(`Error reading or processing the file: ${error.message}`);
    throw error;
  }
}
const filePath = './example.txt'; 
readFileAndProcess(filePath)
  .then(wordCount => console.log(`Processing complete. Total words: ${wordCount}`))
  .catch(error => console.error(`Failed to process the file: ${error.message}`));
