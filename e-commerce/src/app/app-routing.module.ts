import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { UpdateItemComponent } from './update-item/update-item.component';
 

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"items",component:ItemListComponent},
  {path:"update",component:UpdateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
