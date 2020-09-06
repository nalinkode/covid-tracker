import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { Error404Component } from './shared/error/error404/error404.component';
import { Error500Component } from './shared/error/error500/error500.component';
import { CountriesComponent } from './shared/countries/countries.component';
import { HomeComponent } from './shared/home/home.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavBarComponent, Error404Component, Error500Component, CountriesComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
