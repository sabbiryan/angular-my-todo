import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InboxComponent } from './inbox/inbox.component';
import { HistoryComponent } from './history/history.component';
import { PoliciesComponent } from './more/policies/policies.component';
import { LanguagesComponent } from './more/languages/languages.component';
import { SettingsComponent } from './more/settings/settings.component';
import { AddressComponent } from './more/address/address.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inbox", component: InboxComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'policy', component: PoliciesComponent },
  { path: 'language', component: LanguagesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'address', component: AddressComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
