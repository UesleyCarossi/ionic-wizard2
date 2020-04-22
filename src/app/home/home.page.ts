import { Component } from '@angular/core';

declare var WifiWizard2: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results = [];
  info_txt = "";
  async getNetworks() {
    this.info_txt = "loading...";
    try {
      let results = await WifiWizard2.scan();
      this.results = results;
      this.info_txt = "";
    } catch (error) {
      this.info_txt = error;
    }
  }
}