import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ItemDetailPage } from '../item-detail/item-detail';
import { AddItemPage } from '../add-item/add-item';
import { ShareService } from '../../services/share/share';
import { Data } from '../../providers/data/data';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
     public shareService: ShareService, public dataService: Data) {

  }
  
}
