import { SocialSharing } from '@ionic-native/social-sharing';
import { HistoricQrCode } from './../../app/models/historicQrCode';
import { HistoricQrCodeProvider } from './../../providers/historic-qr-code/historic-qr-code';
import { QrCodeProvider } from './../../providers/qr-code/qr-code';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrCodeProvider : QrCodeProvider, private socialSharing: SocialSharing, private historicProvider : HistoricQrCodeProvider, private alertController : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateQrCodePage');
  }

  generateQrCodeFromInput(){

    if(this.myTextInput === "" || this.myTextInput === undefined || this.myTextInput === null){
      this.presentAlert("Veuillez taper quelque chose");
      return null;
    }


    this.qrCodeProvider.generate(this.myTextInput).then((url) => {
      
      this.historicProvider.save(new HistoricQrCode(this.myTextInput, Date.now()));
      this.isGenerated = true;
      this.urlQrCode = url
      this.presentAlert("Le QR Code avec le texte : " + this.myTextInput + " a été générer avec succès, vous pouvez le partagez si vous le")
      ,(error) =>
      console.log("Erreur lors de la génération du code. " + error)
    })
  }

  async presentAlert(messageAlert: string) {

    const alert = await this.alertController.create({
      message: messageAlert,
      buttons: ['OK']
    });
    return await alert.present();
  }

  clickToShare(){
    this.socialSharing.share("Bonjour, je vous partage le QRCode qui contient le texte : " + this.myTextInput, "Partage du QRCode", this.urlQrCode,"")
  }



}
