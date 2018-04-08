import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';
import { AddItemPage } from '../add-item/add-item';
import { ShareService } from '../../services/share/share';
import { Data } from '../../providers/data/data';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  title;
  category;
  photo;
  description;
  quant = 1;
  public Total: number;
  public price: number;
  public orders = [];
  public once = true;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
     public shareService: ShareService, public dataService: Data,
     private alertCtrl: AlertController, public navParams: NavParams) {
       this.dataService.getOrder().then((cart) => {

             if(cart){
               this.orders = cart;
             }
           });
         }

         ionViewDidLoad() {
           this.orders = [
             {title: 'The Triple Stack BurgCheese', price: '10.00', category: 'Dish',
              photo: 'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
               description: 'This is the best pre-made menu item there is.'},

         ];
         }

 add(cart) {
   let indexOfOrder = this.orders.indexOf(cart);
   let orders = {
     quant: this.quant
   };

  if( this.once == true) {
  this.orders[indexOfOrder].quant = 1;
  this.once = false;
  }

  this.orders[indexOfOrder].quant++;
 }

 minus(cart) {
   let indexOfOrder = this.orders.indexOf(cart);
   let orders = {
     quant: this.quant
   };

  if( this.once == true) {
  this.orders[indexOfOrder].quant = 1;
  this.once = false;
  }
  if(this.orders[indexOfOrder].quant > 0 ){
  this.orders[indexOfOrder].quant--;
  }
 }

  placeOrder(item){

    let indexOfOrder = this.orders.indexOf(item);


    let orders = {
      quant: this.quant
    };



    var x=0;
    var i =0;
for(i; i <= this.orders.lastIndexOf(item) + 1 ;i++) {
  x=x+JSON.parse(this.orders[indexOfOrder+1].price);
  var y =   this.orders[indexOfOrder + 1].quant;

  var z = x*y;
  this.Total = z;
}

    this.dataService.saveOrder(this.orders);
    let alert = this.alertCtrl.create({
    title: 'Your total comes to: ',
    subTitle: '$' + this.Total,
    buttons: ['Thanks Dawg']
  });
  alert.present();
  }

}
