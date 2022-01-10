import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardSummaryComponent } from './components/dashboard-summary/dashboard-summary.component';
import { SuffixCurrencyPipe } from './custom-pipes/suffix-currency.pipe'
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { CardComponent } from './components/common/card/card.component';
import { DashboardGraphComponent } from './components/dashboard-graph/dashboard-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardSummaryComponent,
    SuffixCurrencyPipe,
    CardComponent,
    DashboardGraphComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
