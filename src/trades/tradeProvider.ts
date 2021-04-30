
export class TradeProvider {

    constructor(private _provider: Array<TradeData>) {
    }

    public start(): void {

        this._provider.forEach(element => {
            element.Start();
        });
    }
}