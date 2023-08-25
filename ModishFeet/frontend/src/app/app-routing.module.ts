import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ShoePagesComponent } from './components/pages/shoe-pages/shoe-pages.component';
import { LoginComponent } from './components/pages/login/login.component';
import {CartPageComponent}    from './components/pages/cart-page/cart-page.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'shoe/:id',component:ShoePagesComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }