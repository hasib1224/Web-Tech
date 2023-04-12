import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private itemService: ItemService, private router: Router){}
  myItems: Item = new Item();
  ngOnInit(): void {
    this.myItems = this.itemService.getItemToBeUpdated();
    console.log(this.myItems.name);
    //throw new Error('Method no implemented');
  }


  update(): void{
    this.router.navigate(["items"]);
  }

}
