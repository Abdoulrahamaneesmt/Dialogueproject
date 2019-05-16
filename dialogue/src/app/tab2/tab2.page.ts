import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Sim } from '@ionic-native/sim/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public simInfo: any;
  public cards: any;
  constructor(public navCtrl: NavController, private sim: Sim) {
    this.getSimData();
  }
 
  async getSimData() {
    try {
      let simPermission = await this.sim.requestReadPermission();
      if (simPermission == "OK") {
        let simData = await this.sim.getSimInfo();
        this.simInfo = simData;
        this.cards = simData.cards;
        console.log(simData);
   
      }
    } catch (error) {
      console.log(error);
    }
  }
  
}
