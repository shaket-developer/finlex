import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/main/dashboard.component';
import { DashboardSummaryComponent } from './components/dashboard-summary/dashboard-summary.component';
import { DashboardGraphComponent } from './components/dashboard-graph/dashboard-graph.component';
import { ChartModule } from 'primeng/chart';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSummaryListComponent } from './components/dashboard-summary-list/dashboard-summary-list.component';
import { DashboardGraphListComponent } from './components/dashboard-graph-list/dashboard-graph-list.component';

const dashboardroutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSummaryComponent,
    DashboardGraphComponent,
    DashboardSummaryListComponent,
    DashboardGraphListComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    SharedModule,
    RouterModule.forChild(dashboardroutes)
  ],
  bootstrap: []
})
export class DashboardModule { }
