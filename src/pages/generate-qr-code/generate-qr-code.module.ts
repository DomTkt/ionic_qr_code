import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateQrCodePage } from './generate-qr-code';


@NgModule({
  declarations: [
    GenerateQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(GenerateQrCodePage),
    
  ],
})
export class GenerateQrCodePageModule {}
