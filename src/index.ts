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
        console.log('message: ' + msg);
    });

    socket.on('news', (msg) => {
        socket.emit('news', {});
    });

    socket.on('marketEquity', (msg) => {
        socket.emit('tradeEquity', {});
    });

    socket.on('marketBond', (msg) => {
        socket.emit('marketBond', {});
    });

});


server.listen(3000, () => {
    console.log('listening on *:3000');
});


