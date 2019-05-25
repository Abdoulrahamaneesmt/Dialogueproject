import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable, of, throwError } from 'rxjs';
import { forkJoin } from 'rxjs';
import {RequestOptions} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(public http: HttpClient, public navctrl: NavController ) {
   }
   public getNumero() {
      const headers = new HttpHeaders();
      headers.append('Content-type', 'application/json');
      return this.http.get('https://dialoguessd.herokuapp.com/api/numero');
   }
   getData(): Observable<any> {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    // const options = new RequestOptions({headers: headers});
    const response1 = this.http.get('https://dialoguessd.herokuapp.com/api/operateurs');
    const response2 = this.http.get('https://dialoguessd.herokuapp.com/api/type_numero');
    const  response3 = this.http.get('https://dialoguessd.herokuapp.com/api/numero');
    return forkJoin([response1, response2, response3]);
  }
}
