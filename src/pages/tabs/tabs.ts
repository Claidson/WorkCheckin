import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ConfiguracaoPage } from '../configuracao/configuracao';
import { MensalPage } from '../mensal/mensal';
import { SemanalPage } from '../semanal/semanal';
import { FerramentasPage } from '../ferramentas/ferramentas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SemanalPage;
  tab3Root = MensalPage;
  tab4Root = ConfiguracaoPage;
  tab5Root = FerramentasPage;
  tab6Root = ContactPage;
  constructor() {

  }
}
