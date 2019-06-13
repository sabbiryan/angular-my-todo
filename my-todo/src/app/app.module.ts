import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { HistoryComponent } from './history/history.component';
import { PoliciesComponent } from './more/policies/policies.component';
import { LanguagesComponent } from './more/languages/languages.component';
import { SettingsComponent } from './more/settings/settings.component';
import { AddressComponent } from './more/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InboxComponent,
    HistoryComponent,
    PoliciesComponent,
    LanguagesComponent,
    SettingsComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
