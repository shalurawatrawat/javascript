const fs = require('fs');

// Define the callback function
function logFileContent(err, data) {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
}

// Read the file asynchronously
fs.readFile('example.txt', 'utf8', logFileContent);


