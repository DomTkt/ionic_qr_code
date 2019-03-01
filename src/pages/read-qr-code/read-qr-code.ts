import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ReadQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-qr-code',
  templateUrl: 'read-qr-code.html',
})
export class ReadQrCodePage {

  textQrCodeScanned : string
  isScanned : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadQrCodePage');
  }

  scanQrCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.isScanned = true
      this.textQrCodeScanned = barcodeData.text
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
