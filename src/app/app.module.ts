import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router ,RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { Error404Component } from './shared/error/error404/error404.component';
import { Error500Component } from './shared/error/error500/error500.component';
import { CountriesComponent } from './shared/countries/countries.component';
import { HomeComponent } from './shared/home/home.component';
import { routing } from './app.routing';
import { DataServiceService } from './shared/service/data-service.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,routing,HttpClientModule],
  declarations: [ AppComponent, NavBarComponent, Error404Component, Error500Component, CountriesComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataServiceService]
})
export class AppModule { }
