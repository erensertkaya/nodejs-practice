const fs = require('fs');

//Async instance fs.readFile method
/*
fs.readFile('instance.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    else
    {
        console.log(data.toString());
        console.log("file reading process finished");
    }
});
*/

//Sync instance fs.readFile method
const instanceFile = fs.readFileSync('instance.txt');
console.log(instanceFile.toString());
console.log("file reading process finished");

