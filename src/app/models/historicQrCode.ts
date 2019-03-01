export class HistoricQrCode {
    textQrCode: string;
    createdAt: number;

    constructor(textQrCode: string, createdAt: number){
        this.textQrCode = textQrCode;
        this.createdAt = createdAt
    }
}