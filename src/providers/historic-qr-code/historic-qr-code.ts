import { HistoricQrCode } from './../../app/models/historicQrCode';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

const HISTORIC_KEY = "historic_";
/*
  Generated class for the HistoricQrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoricQrCodeProvider {


  constructor(public http: HttpClient, private storage: Storage) {
  }

  save(historicQrCode : HistoricQrCode){
    console.log(historicQrCode);
    this.storage.set(this.getHistoricKey(historicQrCode), JSON.stringify(historicQrCode));
  }

  getHistoricStored() : Promise<HistoricQrCode[]>{
    return new Promise(resolve => {
      let results: HistoricQrCode[] = [];
      this.storage
        .keys()
        .then(keys => keys.filter(key => key.includes(HISTORIC_KEY)).forEach(key => this.storage.get(key)
          .then(data => results.push(JSON.parse(data)))));
      return resolve(results);
    });
  }

  getHistoricKey(historicQrCode: HistoricQrCode) {
    return HISTORIC_KEY + historicQrCode.createdAt;
  }
}
