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
  operateurs: any;
  type_numero:any;
  numero:any
  constructor(public navCtrl: NavController, private sim: Sim,
    public movieService:MovieService) {
    //this.getSimData();
    /*this.getUsers();
    this.getUsers1();
    this.getUsers2();*/
    
  }
 

/*
  getUsers() {
    this.movieService.getUsers().subscribe(events => {
      console.log(events)
      this.operateurs=events;
      console.log(this.operateurs)
    });
  }
  getUsers1() {
    this.movieService.getUsers().subscribe(events => {
      console.log(events)
      this.type_numero=events;
      console.log(this.type_numero)
    });
  }
  getUsers2() {
    this.movieService.getUsers().subscribe(events => {
      console.log(events)
      this.numero=events;
      console.log(this.numero)
    });
  }
*/
}
