import {RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import {NgModule} from "@angular/core"
import { ItemListComponent } from "./item-list/item-list.component"
import { UpdateComponent } from "./update/update.component"
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"

const routes:Routes=[
    {path:"home", component:HomeComponent},
    {path:"items", component:ItemListComponent},
    {path:"update", component:UpdateComponent},
    {path:"login", component:LoginComponent},
    {path:"register",component:RegisterComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}