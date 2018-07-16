import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule } from '@angular/material';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './entities/contact/contact.component';
import { MembershipTypeComponent } from './entities/membership-type/membership-type.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MembershipTypeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
