import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  items: Item[]=[
    {id:1 ,name: "Iphone", price:200000, quantity:30},
    {id:2 ,name: "Samsung", price:80000, quantity:3},
    {id:3 ,name: "OnePlus", price:30000, quantity:31}
  ];

  getItems():Item[]{
    return this.items;
  }

}