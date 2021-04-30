export class RandomDataProvider {

    GetRandomInt(min: number, max: number) {

        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    GetRandomTicker() {

        const months = ["GOOG", "MSFT", "IBM", "APPLE", "EMC", "DELL", "FACEBOOK"];
        const random = Math.floor(Math.random() * months.length);
        return months[random];
        
    }
}