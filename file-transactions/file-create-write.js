const fs = require('fs');

fs.appendFile('created-file.txt', 'this file created by eren sertkaya via a node.js script', (err) => {
    if (err)
        throw err;
    console.log('file created and added some letters');
});

fs.writeFile('created-file.txt', 'sorry letters deleted by writeFile method', (err) => {
    if (err)
        throw err;
    console.log('letters deleted');
});