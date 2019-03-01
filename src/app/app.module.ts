import { HistoricalQrCodePage } from './../pages/historical-qr-code/historical-qr-code';
import { GenerateQrCodePage } from './../pages/generate-qr-code/generate-qr-code';
import { ReadQrCodePage } from './../pages/read-qr-code/read-qr-code';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GenerateQrCodePage,
    HistoricalQrCodePage,
    ReadQrCodePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GenerateQrCodePage,
    HistoricalQrCodePage,
    ReadQrCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    BarcodeScanner
  ]
})
export class AppModule {}
