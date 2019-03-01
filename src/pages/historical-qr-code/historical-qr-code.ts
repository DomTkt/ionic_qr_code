import { HistoricQrCodeProvider } from './../../providers/historic-qr-code/historic-qr-code';
import { HistoricQrCode } from './../../app/models/historicQrCode';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistoricalQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historical-qr-code',
  templateUrl: 'historical-qr-code.html',
})
export class HistoricalQrCodePage {

  historicQrCode : HistoricQrCode[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private historicProvider : HistoricQrCodeProvider) {

  }

  ionViewWillEnter(){
    this.historicProvider.getHistoricStored().then(historic => {
      this.historicQrCode = historic})
  }

}
