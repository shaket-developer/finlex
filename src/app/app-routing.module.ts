import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';

import { DashboardComponent } from './pages/dashboard.component';

import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { CardComponent } from './components/common/card/card.component';

import { DashboardGraphComponent } from './components/dashboard-graph/dashboard-graph.component';
import { DashboardSummaryComponent } from './components/dashboard-summary/dashboard-summary.component';

import { SuffixCurrencyPipe } from './custom-pipes/suffix-currency.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard-component', pathMatch: 'full' },
  { path: 'dashboard-component', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardSummaryComponent,
    SuffixCurrencyPipe,
    CardComponent,
    DashboardGraphComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ChartModule,
  ],
  exports: [
    RouterModule,
    DashboardComponent,
    DashboardSummaryComponent,
    SuffixCurrencyPipe,
    CardComponent,
    DashboardGraphComponent,
    PageNotFoundComponent
  ]
})
export class AppRoutingModule { }
