import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../services/movie.service';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
  operateurs: any;
  type_numero:any;
  numero:any;
  data1: any;
  data2: any;
  data3: any;

  constructor(private route: ActivatedRoute, 
   public router: Router,  public httpClient: HttpClient,
     public Http: HTTP,public loadingController: LoadingController,
   public alertController: AlertController,
   public movieService:MovieService) {
   
  //this.getUsers();
  //this.getUsers1();
  //this.getUsers2();
  this.getData();
  }
  async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    this.movieService.getData()
      .subscribe(res => {
        console.log(res);
        this.data1 = res[0];
        this.data2 = res[1];
        this.data3 = res[2];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
 
}