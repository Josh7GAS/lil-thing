var http = require ("http");

//create a server object:
http.createServer(function (req, res){
    res.write("Hello World");//thats is the information that the function passes to comunicate to the client, niggaaaaa
    res.end();//end the response
}).listen(8080);//the door (hi there!)