const fs = require('fs');
const http = require("http");

const server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8;'
    });
    const readShortData = fs.createReadStream(__dirname + '/source/html/index.html', 'utf-8');
    readShortData.pipe(res);
});

server.listen(3000, 'localhost');