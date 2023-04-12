import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }


  items: Item[] = [
    {id: 1, name: "Iphone", price: 2000, quantity: 0},
    {id: 2, name: "mac-book", price: 10000, quantity: 3},
    {id: 3, name: "PC", price: 50000, quantity: 18},
    {id: 4, name: "Laptop", price: 60000, quantity: 8},
    {id: 5, name: "Mouse", price: 2000, quantity: 4}
  ];

  getItems(): Item[]{
    return this.items;
  }

  setItem(item_name: String){
    this.items.forEach(item =>{
      if(item.name == item_name){
        item.quantity--;
      }
    })
  }
  setItems(item_name: Item){
      item_name.quantity--;
  }

  itemToBeUpdated: Item = new Item();
  
  setItemToBeUpdated(index: number):void{
    let item = this.items.at(index);
    if(item!=null){
      this.itemToBeUpdated = item;
    }
  }

  getItemToBeUpdated(): Item{
    return this.itemToBeUpdated;
  }
}
