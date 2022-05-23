const http = require('http');

http.createServer(function(req,res){
    res.writeHead(201);
    res.write('<h1> Bonjour </h1>')
    
}).listen(3000);

console.log('Server running on 3000');