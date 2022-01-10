import { Component, Input, OnInit } from '@angular/core';
import DashboardSummary from 'src/app/types/DashboardSummary';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {
  amount = 34_50_100;
  @Input('summary') summary!: DashboardSummary;
  constructor() { }

  ngOnInit(): void {
  }

}
