import { Component } from '@angular/core';
import { Contact } from './entities/contact/contact.model';
import { MembershipType } from './entities/membership-type/membership-type.model';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contact: Contact

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.apiService.getsingle('Contact', 2).subscribe((data: any) => {
      this.contact = data
    })
  }
}
