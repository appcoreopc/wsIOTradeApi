import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Socket } from "socket.io-client";
import { RandomDataProvider } from './randomDataProvider';
import { TradeEquityModel } from '../models/tradeEquityModel';

export class TradeEquityDataProvider implements TradeData {

    constructor(private _socketData: Socket<DefaultEventsMap, DefaultEventsMap>) {

    }

    Start(): void {

        console.log('start equity trader provider');
        this._socketData.emit("equity", { "hello": "equity world" });
        var randomNumber = new RandomDataProvider();

        let timerId = setInterval(() => {

            var message: TradeEquityModel = {
                Ticker: randomNumber.GetRandomTicker(),
                Buy: randomNumber.GetRandomInt(2, 10),
                Sell: randomNumber.GetRandomInt(2, 10)
            };

            this._socketData.emit("marketEquity", message)
        }, 3000);
    }

}