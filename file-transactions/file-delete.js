const fs = require('fs');

fs.unlink('victim.txt',(err) => {
    if (err)
        throw err;
    console.log("file deleted");
});