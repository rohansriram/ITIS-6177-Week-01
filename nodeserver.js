const http = require('http');

const port = 3000;

const server = http.createServer(function(req,res){
   res.writeHead(200, {'Content-type':'text/plain'});
   res.end("Hello World");
});

server.listen(port, '127.0.0.1');