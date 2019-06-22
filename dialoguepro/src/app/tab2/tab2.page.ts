import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Sim } from '@ionic-native/sim/ngx';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public simInfo: any;
  public cards: any;
  public simdata: any;
  constructor(public navCtrl: NavController, private sim: Sim, public movieService: MovieService) {
    this.getSimData();
  }

  async getSimData() {
    try {
      const simPermission = await this.sim.requestReadPermission();
      if (simPermission === 'OK') {
        const simData = await this.sim.getSimInfo();
        this.simdata = simData;
        this.simInfo = simData;
        this.cards = simData.cards;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
