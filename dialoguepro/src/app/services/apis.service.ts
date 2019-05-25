import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NavController} from '@ionic/angular';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(public http: HttpClient, public navctrl: NavController ) { }

  public getNumero() {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http.get('https://dialoguessd.herokuapp.com/api/numero');
  }
  getTypeNumero() {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.get('https://dialoguessd.herokuapp.com/api/type_numero');
  }
  getOperateurs() {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    return this.http.get('https://dialoguessd.herokuapp.com/api/operateurs');
  }
}
