var http = require('http');
 
var s = http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello World");
    response.end();
});
 
s.listen(777);
 
console.log("Listening on http://10.20.0.99:777/");
