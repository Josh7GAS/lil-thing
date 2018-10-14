var fs = require ("fs");

fs.appendFile("newfile.txt", "hello there!", function (err){
    if (err) throw err;
    console.log("Saved");
})