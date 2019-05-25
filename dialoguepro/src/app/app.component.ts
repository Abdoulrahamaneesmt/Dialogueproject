import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { from } from 'rxjs';
/*const config = {
  apiKey: "AIzaSyBxYoVjHxHaGj598i8MdfSRT0grKPBSHAg",
    authDomain: "testdialoguebackend-8faea.firebaseapp.com",
    databaseURL: "https://testdialoguebackend-8faea.firebaseio.com",
    projectId: "testdialoguebackend-8faea",
    storageBucket: "testdialoguebackend-8faea.appspot.com",
    messagingSenderId: "381773523585",
    appId: "1:381773523585:web:6e1043ea32314325"
}*/
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   //firebase.initializeApp(config);
  }}
