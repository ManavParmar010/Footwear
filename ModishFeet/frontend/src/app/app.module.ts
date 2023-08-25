import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { ShoePagesComponent } from './components/pages/shoe-pages/shoe-pages.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    ShoePagesComponent,
    LoginComponent,
    CartPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarRatingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
