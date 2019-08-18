import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { KakaoPage } from '../pages/kakao/kakao';
import { KakaoCordovaSDK } from 'kakao-sdk';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    KakaoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true, 
      autoFocusAssist: false,
      mode: 'md',

      platforms: {
        ios: {
          statusbarPadding: true
        },
        android: {

        }
      },
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KakaoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    KakaoCordovaSDK,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
