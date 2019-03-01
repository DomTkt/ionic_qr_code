import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File } from '@ionic-native/file/ngx'

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private fileChooser: FileChooser, private file : File, private alertController : AlertController) {
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

  async presentAlert(messageAlert: string) {

    const alert = await this.alertController.create({
      message: messageAlert,
      buttons: ['OK']
    });
    return await alert.present();
  }

  openQrCode(){
    this.readQRCodeFromFile()
  }

  readQRCodeFromFile(){
    let filePathWithoutFileName : string;
    this.fileChooser.open()
    .then(uri => {
      this.file.resolveLocalFilesystemUrl(uri.toString())
      .then(fileName => {
        filePathWithoutFileName = uri.toString().replace(fileName.name.toString(), "");
        this.file.readAsText(filePathWithoutFileName, fileName.name)
      .then(data => {
        this.presentAlert(data)
        }
      )
      .catch((error) => {console.log('Error when reading QrCode file', error)});
    }).catch((error) => {console.log('Error when get the path of the file selected', error)});
  })
}
  

}
