import { Component,OnInit } from '@angular/core';
import { Item } from '../item';
import {ItemsService} from '../items.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(private itemService:ItemsService){}
  
  myItem: Item[]=[];
  ngOnInit(): void{
    // myItem
    this.myItem=this.itemService.getItems();
    console.log(this.itemService.getItems());

  }

}
