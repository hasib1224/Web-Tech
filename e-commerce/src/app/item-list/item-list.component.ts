import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import {ItemsService} from '../items.service'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(private itemService:ItemsService,private router: Router){}
  
  myItem: Item[]=[];
  ngOnInit(): void{
    // myItem
    this.myItem=this.itemService.getItems();
    console.log(this.itemService.getItems());
  }

  requestView(item_name:String): void{
    // myItem
    alert("Requested for");
  }

  buyItem(item_id:number):void{
    // this.myItem[item_id].quantity=this.myItem[item_id].quantity-1;
    // alert(this.myItem[item_id].quantity);
  this.itemService.changeItems(item_id);
  }

  // updateItem(index:number):void{
  //   this.router.navigate(["update"])

  // }

  updateItem(index:number):void{
    this.itemService.setItemToBeUpdated(index);
    this.router.navigate(["update"]);

  }

  




}
