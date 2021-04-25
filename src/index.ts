import { createServer } from "http";
import express from 'express';
import { Server } from 'socket.io';
import { emit } from "node:process";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    console.log('a user connected');

    socket.on('chat message', (msg) => {
        socket.broadcast.emit('news', msg);
        console.log('message: ' + msg);
    });

    socket.on('news', (msg) => {
        console.log(msg);
        socket.broadcast.emit('news', {});
    });

    socket.on('marketEquity', (msg) => {
        socket.broadcast.emit('marketEquity', {});
    });

    socket.on('marketBond', (msg) => {
        socket.broadcast.emit('marketBond', {});
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});


