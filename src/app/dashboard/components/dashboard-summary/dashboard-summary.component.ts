import { Component, Input } from '@angular/core';
import DashboardSummary from 'src/app/types/DashboardSummary';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent {

  @Input() summary!: DashboardSummary;

  constructor() { }

}
