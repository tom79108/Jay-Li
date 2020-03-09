var http = require('http');
function processRecord(request, response) {
    var body = 'Node.js Tutorial\n';
    var contentLength = body.length;
    response.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'test/plain'
    })
    response.end(body);
}

var server = http.createServer(processRecord)
console.log("server created, start listen to port 8765");
server.listen(8765);