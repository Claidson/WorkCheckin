import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { MensalPage } from '../pages/mensal/mensal';
import { SemanalPage } from '../pages/semanal/semanal';
import { FerramentasPage } from '../pages/ferramentas/ferramentas';

import { DatabaseService } from '../providers/shared/database.service'
import { ToastService } from '../providers/shared/toast.service'
//import { PontoService } from '../providers/ponto/ponto.service'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ConfiguracaoPage,
    MensalPage,
    SemanalPage,
    FerramentasPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ConfiguracaoPage,
    MensalPage,
    SemanalPage,
    FerramentasPage,



  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    DatabaseService,
    ToastService,
   // PontoService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
