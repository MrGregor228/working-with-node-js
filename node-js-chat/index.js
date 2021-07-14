const express = require('express');
const app = express();
const server = require('http').createServer(app);
const socket_io = require('socket.io')(server);
const fs = require('fs');

app.use("/public", express.static("public"));

server.listen(3000);

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


const users= [],
      connections = [];

socket_io.sockets.on('connection', function(socket) {
    connections.push(socket);
    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
    });
    socket.on("send mess", (data) => {
        socket_io.sockets.emit("add mess", {
            mess: data.mess, 
            name: data.name,
            className: data.className
        });
        let db_messages = JSON.parse(fs.readFileSync('./db.json', (err) => {
            if (err) {
                console.log(err);
            }
        }));        
        db_messages.push(data);
        fs.writeFileSync('./db.json', JSON.stringify(db_messages), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
});