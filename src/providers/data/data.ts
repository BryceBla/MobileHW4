import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class Data {

  constructor(public storage: Storage){

  }

  getData() {
    return this.storage.get('todos');
  }

  save(data){
    this.storage.set('todos', data);
  }

  getOrder(){
    return this.storage.get('cart');
  }

  saveOrder(order){
    this.storage.set('cart', order);
  }

  clearStorage(){
    this.storage.clear();
  }

  deleteItem(data){
  this.storage.remove('todos')

}
}
