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
  quant= 1;
  public Total: number;
  public price: number;
  public orders = [];



  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
     public shareService: ShareService, public dataService: Data,
     private alertCtrl: AlertController, public navParams: NavParams) {
       this.dataService.getOrder().then((cart) => {

             if(cart){
               this.orders = cart;
             }
           });
         }


  placeOrder(item){

    let indexOfOrder = this.orders.indexOf(item);


    let orders = {
      quant: this.quant
    };




    var x=0;

    x=x+JSON.parse(this.orders[indexOfOrder+1].price);
    var y = this.quant;

    var z = x*y;
    this.Total = z;

    this.dataService.saveOrder(this.orders);
    let alert = this.alertCtrl.create({
    title: 'Your total comes to: ',
    subTitle: '$' + this.Total,
    buttons: ['Thanks Dawg']
  });
  alert.present();
  }

}
