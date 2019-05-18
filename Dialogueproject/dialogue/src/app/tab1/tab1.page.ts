import { Component,ViewChild } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { StorageService,Item } from '../service/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: Item[] = [];


  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: StorageService, 
    private plt: Platform, private toastController: ToastController
    ,private callNumber: CallNumber
  )   {this.plt.ready().then(() => {
    this.loadItems();
  });
}
 // CREATE
 addItem() {
  this.newItem.modified = Date.now();
  this.newItem.id = Date.now();

  this.storageService.addItem(this.newItem).then(item => {
    this.newItem = <Item>{};
    this.showToast('vous avez ajouter votre code USSd')
    this.loadItems(); // Or add it to the array directly
  });
}

// READ
loadItems() {
  this.storageService.getItems().then(items => {
    this.items = items;
  });
}

// UPDATE
updateItem(item: Item) {
  item.title = `${item.title}`;
  item.modified = Date.now();

  this.storageService.updateItem(item).then(item => {
    this.showToast('votre code ussd est mise à jour!');
    this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
    this.loadItems(); // Or update it inside the array directly
  });
}

// DELETE
deleteItem(item: Item) {
  this.storageService.deleteItem(item.id).then(item => {
    this.showToast('votre code ussd à étè suprimer');
    this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
    this.loadItems(); // Or splice it from the array directly
  });
}

// Helper
async showToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}


  
 
  callNow(number) {
    this.callNumber.callNumber(number, true)
    console.log(number);
  }

}
