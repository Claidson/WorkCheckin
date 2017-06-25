import { Component } from '@angular/core';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  versao: string
  constructor() {
    this.versao = "0.0.1";
  }

}
