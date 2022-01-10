import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-graph',
  templateUrl: './dashboard-graph.component.html',
  styleUrls: ['./dashboard-graph.component.css']
})
export class DashboardGraphComponent implements OnInit {
  @Input('graph') graph!: any;
  constructor() { }

  ngOnInit(): void {
  }
  
}
