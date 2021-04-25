import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const target = process.env.TRADESERVER  || 'ws://localhost:3000'; 
const socket = io('ws://localhost:3000');

socket.on("connect", () => {

    console.log('connected to server and begin sending message over');

    // subscribe to different data 
    // const socketData:Socket<DefaultEventsMap, DefaultEventsMap>; 

  });

socket.connect();
