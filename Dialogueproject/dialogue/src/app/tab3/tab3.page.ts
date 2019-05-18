import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Http,Headers } from '@angular/http';
import { MovieService } from '../services/movie.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  {
  users: any;
  constructor(private route: ActivatedRoute, 
   public router: Router,  public httpClient: HttpClient,
     public Http: HTTP,
   public alertController: AlertController,
   public movieService:MovieService) {
    /*this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });*/
  this.getUsers();
  }
  /*ngOnInit() {
    this.getData();
  }

  async getData() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
    this.movieService.getData()
      .subscribe(res => {
        console.log(res);
        this.data1 = res[0];
        this.data2 = res[1];
        this.data3 = res[2];
        this.data4 = res[3];
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
}*//*
  github menu(){const headers =new httpHeaders();
     headers.append('content-type','application/json');
  return this.http.get('https://magint.herokuapp.com/menu/plat/all',{headers:headers});}*/
  getUsers() {
    this.movieService.getUsers().subscribe(events => {
      console.log(events)
      this.users=events;
      console.log(this.users)
    });
  }
  
  /*edit(key) {
    this.router.navigate(['/edit/'+key]);
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this info?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('infos/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;*/
}