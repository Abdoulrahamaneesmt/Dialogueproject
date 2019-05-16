import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import {  Headers } from '@angular/http';
import { NavController } from '@ionic/angular';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'https://dialoguessd.herokuapp.com/api/type_numero';
  object : any  ;
  constructor(public http: HttpClient,public navctrl:NavController ) { }
  getUsers() {
    const headers= new HttpHeaders();
    headers.append('Content-type','multipart/from-data');
    return this.http.get('https://dialoguessd.herokuapp.com/api/type_numero', {headers:headers});
  
  }
  }