import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MembershipTypeComponent } from './membership-type/membership-type.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MembershipTypeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
