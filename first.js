var http = require('http');

//create a server object:
http.createServer(function(require, response){
  response.writeHead(200,{"Content-Type":"text/html"});
    response.write("Hello World!");
    response.end(); 
}).listen(8080); //the server object listens on port 8080