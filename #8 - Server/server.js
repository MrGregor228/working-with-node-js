const http = require("http");
// const events = require('events');
// let myEmit = new events.EventEmitter();
const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8;'
    });
    
    res.end("Some text");
});

server.listen(3000, 'localhost');