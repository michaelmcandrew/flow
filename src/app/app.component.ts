import { Component } from '@angular/core';
import { Contact } from './entities/contact.model';
import { MembershipType } from './entities/membership-type.model';

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
    this.membershipType = new MembershipType;
    this.membershipType.id = 1
  }
  contact: Contact;
  membershipType: MembershipType;
}
