import { Component } from '@angular/core';
import { ModalController, NavController, AlertController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { AddItemPage } from '../add-item/add-item';
import { AboutPage } from '../about/about';


import { ShareService } from '../../services/share/share';
import { Data } from '../../providers/data/data';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];
  public orders = [];
  title: string;
  price: number;
  category: string;
  photo: string;
  description: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
     public shareService: ShareService, public dataService: Data, private alertCtrl: AlertController) {
       this.dataService.getData().then((todos) => {

             if(todos){
               this.items = todos;
             }

           });

}

ionViewDidLoad() {
  this.items = [
    {title: 'The Triple Stack BurgCheese', price: '10.00', category: 'Dish',
     photo: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
      description: 'This is the best pre-made menu item there is.'},

];
}


edit(item) {
  let addModal = this.modalCtrl.create(AddItemPage);
    let indexOfItem = this.items.indexOf(item);

      addModal.onDidDismiss((item) => {
        if(item){
          this.updateItem(item, indexOfItem);
        }

      });
addModal.present();
}


addToCart(item) {
  this.navCtrl.push(AboutPage, {
    cart: item
  });

  this.orders.push(item);
  this.dataService.saveOrder(this.orders);


}


deletItem(item){
  for(var i = 0; i < this.items.length; i++) {

  if(this.items[i] == item){
    this.items.splice(i, 1);
    this.dataService.save(this.items)
  }

}
this.dataService.deleteItem(this.items);

}
addItem() {
  let addModal = this.modalCtrl.create(AddItemPage);

      addModal.onDidDismiss((item) => {

            if(item){
              this.saveItem(item);
            }

      });

      addModal.present();
}

saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

updateItem(item, indexOfItem) {

  this.items[indexOfItem] = item;
}

viewItem(item) {
  this.navCtrl.push(ItemDetailPage, {
    item: item
  });
}



}
