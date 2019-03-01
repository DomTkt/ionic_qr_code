import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricalQrCodePage } from './historical-qr-code';

@NgModule({
  declarations: [
    HistoricalQrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricalQrCodePage),
  ],
})
export class HistoricalQrCodePageModule {}
