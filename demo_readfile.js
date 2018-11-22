var http = require ("http");//caling the http module
var fs = require("fs");//calling the file system moodule
http.createServer(function(req, res){//creating a function to make the comunication betwen th server and the client(browser)
    fs.readFile("chat.html", function(err, data ){//'fs' standes for 'file system' in this line he is reading the html file that is host in the same directory. 
        res.writeHead(200, {"content-Type":"Text/html"});
        res.write(data);
        res.end();
    });
}).listen(8080);