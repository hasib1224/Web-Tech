import { Component } from '@angular/core';
import {ItemsService} from '../items.service';
import { Item } from '../item';
import{Router} from '@angular/router'

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent {
  [x: string]: any;
  constructor(private itemService:ItemsService,private router:Router){}

  myItem: Item=new Item;
  
  ngOnInit(): void{
    this.myItem=this.itemService.getItemToBeUpdated();
    // alert(this.itemService.getItemToBeUpdated().name);
    // console.log(this.itemService.getItemToBeUpdated().name);
  }

  update():void{
    this.router.navigate(["items"])
  }


}
