import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.contact = new Contact;
    this.contact.first_name = 'Johanna'
    this.contact.last_name = 'McAndrew'
  }
  title = 'CiviCRM';
  contact: Contact;
}
