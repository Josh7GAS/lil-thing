var http = require ("http");
var fs = require("fs");
http.createServer(function(req, res){
    fs.readFile("chat.html", function(err, data ){
        res.writeHead(200, {"content-Type":"Text/html"});
        res.write(data);
        res.end();
    });
}).listen(8080);