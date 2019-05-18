import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import {  Headers } from '@angular/http';
import { NavController } from '@ionic/angular';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'https://dialoguessd.herokuapp.com/api/type_numero/';
 
  
  constructor(public http: HttpClient,public navctrl:NavController ) {
   }
  getUsers() {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
    return this.http.get('https://dialoguessd.herokuapp.com/api/type_numero');
  }
  }