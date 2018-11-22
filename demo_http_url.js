var http = require("http");// creating the variable to call the module
http.createServer(function (req,res){//in that is using the modules n a function to proced the request and comunication if the client.
    res.writeHead(200,{"Content-Type":"text/html"});// that´s the 
    res.write(req.url);//represating the request from the client as a (http.IncomingMenssage object).
    res.end();//and of the function ;)
}).listen(8080);