import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GenerateQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-qr-code',
  templateUrl: 'generate-qr-code.html',
})
export class GenerateQrCodePage {

  myTextInput : string;
  urlQrCode : string;
  isGenerated : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrCodeProvider : QrCodeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateQrCodePage');
  }

  generateQrCodeFromInput(){
    this.qrCodeProvider.generate(this.myTextInput).then((url) => {
      this.isGenerated = true
      this.urlQrCode = url
      ,(error) =>
      console.log(error)
    })
  }

}
