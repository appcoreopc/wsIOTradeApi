import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

import { NewsDataProvider } from './trades/news';
import { TradeEquityDataProvider  } from './trades/equity';
import { TradeProvider } from './trades/tradeProvider';

const target = process.env.TRADESERVER  || 'ws://localhost:3000'; 
const socket = io('ws://localhost:3000');

const newsProvider = new NewsDataProvider(socket);
const tradeEquityProvider = new TradeEquityDataProvider(socket);

var _tradeProviders = Array<TradeData>();
_tradeProviders.push(newsProvider);
_tradeProviders.push(tradeEquityProvider);

var trades = new TradeProvider(_tradeProviders);
trades.start();

console.log('initialization of provider: COMPLETED');

socket.on("connect", () => {

    console.log('connected to server and begin sending message over');
});

socket.connect();
