import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  info = {};

  constructor(private route: ActivatedRoute,
    public router: Router,
    private callNumber: CallNumber) {
    firebase.database().ref('infos/'+this.route.snapshot.paramMap.get('key')).on('value', resp => {
      this.info = snapshotToObject(resp);
    });
  }

  ngOnInit() {
  }
  callNow(number) {
    this.callNumber.callNumber(number, true)
    console.log(number);
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
