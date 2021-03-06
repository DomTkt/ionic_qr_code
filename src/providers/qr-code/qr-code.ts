import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import QRCode from 'qrcode';

/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QrCodeProvider Provider');
  }

  generate(text: string): Promise<string> {
    const qrCodeEncoder = QRCode;
    return new Promise<string> ((resolve,reject) => {
      qrCodeEncoder.toDataURL(text, {errorCorrectionLevel : "H"}, function (err,url){
        if(err){
          reject(err);
        }else{
          resolve(url);
        }
      })
    })
  }



}
