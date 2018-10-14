var fs = require("fs");

fs.writeFile("mynewfile1.txt", "renamedfile.txt", function (err){
    if (err) throw err;
    console.log ("Renamed!");
})