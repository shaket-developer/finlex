import { Component } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import cards from './layouts/cards.layout';
import graph from './layouts/graphs.layout';
import { HttpClient } from '@angular/common/http'; 
import DashboardCard from './types/DashboardSummary';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {
  }

}
