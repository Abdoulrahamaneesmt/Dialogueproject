import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse  } from '@angular/common/http';
import {  Headers } from '@angular/http';
import { NavController } from '@ionic/angular';
import { RequestOptions } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'https://dialoguessd.herokuapp.com/api/type_numero/';
  constructor(public http: HttpClient,public navctrl:NavController ) {
   }
   getData(): Observable<any> {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
    let response1 = this.http.get('https://dialoguessd.herokuapp.com/api/operateurs');
    let response2= this.http.get('https://dialoguessd.herokuapp.com/api/type_numero');
    let response3 = this.http.get('https://dialoguessd.herokuapp.com/api/numero');
    return forkJoin([response1, response2, response3]);
  }  
  }
   /*
  getUsers() {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
    return this.http.get('https://dialoguessd.herokuapp.com/api/type_numero');
 /* }
  getUsers1() {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
    return this.http.get('https://dialoguessd.herokuapp.com/api/type_numero');
  }
  getUsers2() {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
    return this.http.get('https://dialoguessd.herokuapp.com/api/numero');
  }
  getUsers3() {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
     let options = new RequestOptions({ headers:headers});
    return this.http.get('https://dialoguessd.herokuapp.com/api/type_numero');
  }*/
 