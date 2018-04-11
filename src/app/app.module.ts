import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewpagePage } from '../pages/newpage/newpage';
import { RegisterPage } from '../pages/register/register';
import { ActivatePage } from '../pages/activate/activate';
import { MypetsPage } from '../pages/mypets/mypets';
import { MypetPage } from '../pages/mypet/mypet';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewpagePage,
    RegisterPage,
    ActivatePage,
    MypetsPage,
    MypetPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewpagePage,
    RegisterPage,
    ActivatePage,
    MypetsPage,
    MypetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
