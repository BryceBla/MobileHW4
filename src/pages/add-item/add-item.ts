import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  price: number;
  category: string;
  photo: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem(){

    let newItem = {
      title: this.title,
      price: this.price,
      category: this.category,
      photo: this.photo,
      description: this.description
    };

    this.view.dismiss(newItem);

  }

  close(){
    this.view.dismiss();
  }

}
