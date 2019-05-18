import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
 
  infos = [];
  ref = firebase.database().ref('infos/');

  constructor(private route: ActivatedRoute, 
    public router: Router, public alertController: AlertController,
    public movieService:MovieService) {
  }
  getUsers() {
    this.movieService.getUsers().subscribe(data => {
      console.log(data)
    });
  }
}