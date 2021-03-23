export class Day {
    public opens: string;
    public closes: string;

    constructor (obj?:any) {
        this.opens = obj && obj.opens || "";
        this.closes = obj && obj.closes || "";
    }
}