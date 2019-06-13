import { Component, OnInit } from '@angular/core';
import { Settings, AppService } from 'src/app/app.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  
})
export class SettingsComponent implements OnInit {

  model: Settings;
  view: Settings = new Settings();

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.model = new Settings();
    this.loadView();
  }

  loadView() {
    this.view = this.appService.getSettings();
  }

  save() {
    this.appService.saveSettings(this.model);

    this.loadView();
  }

}
