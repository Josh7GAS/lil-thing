var fs = require ("fs");

fs.writeFile("mynewfile3!.txt","this is my new text", function  (err){
        if (err) throw err;
        console.log ("Replaced!");
} )