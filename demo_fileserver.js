var http = require("http");
var url = require("url");
var fs = require ("fs");

http.createServer(function (request, response){
    var q = url.parse (req.url, true);
    var filename = "." + qpathname;
    fs.readFile(filename, function (err, data){
        if (err) {
            response.writehead(404, {"Content-Type": "text/html"});
            return response.end("404 Not Found");
        }
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(data);
        return response.end();
    });
}).listen(8080);