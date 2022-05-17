import { SettingsService } from './../services/settings.service';
import { Component, OnInit } from '@angular/core';

declare function  LoadJsInicial();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(private settingServices:SettingsService) { }

  ngOnInit() {
    LoadJsInicial();

  }

}
