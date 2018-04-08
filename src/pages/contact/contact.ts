import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {



  constructor(public navCtrl: NavController, public dataService: Data) {

  }

  clearData(){
    this.dataService.clearStorage();
  }

}
