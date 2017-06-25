import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public registro = {
    dia:'',
    entrada: '13:00',
    intervalo:'18:00',
    retorno:'19:30',
    saida: '22:30',
    extra:'00:00',
  }

}
