import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './shared/service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService : DataServiceService) { }

  ngOnInit() {
  }

}