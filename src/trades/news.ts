
import { io, Socket } from "socket.io-client";
import { Server } from 'socket.io';
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export class NewsDataProvider implements TradeData {

    constructor(private _socketData:Socket<DefaultEventsMap, DefaultEventsMap>) {
        
    }


    Start(): void {

        console.log('starting news data provider');

        this._socketData.emit("news", { "hello": "news world"});

    }
    
} 