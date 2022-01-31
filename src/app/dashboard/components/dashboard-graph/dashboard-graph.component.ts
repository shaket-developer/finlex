import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.css']
})
export class DashboardGraphComponent {

  @Input() graph!: any;

  constructor() { }

}
