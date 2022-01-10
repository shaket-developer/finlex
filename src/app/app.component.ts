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
  title = 'finlex';
  summaries: DashboardCard[] = cards as DashboardCard[];
  graphs = graph;
  
  constructor(private http: HttpClient) {
    
    
  }
  ngOnInit() {
    let summaryDataFiles: Observable<any>[] = [];
    this.summaries.forEach(summary => {
      summaryDataFiles.push(this.getSummaryData(summary.apiCall()))
    })
    forkJoin(summaryDataFiles).subscribe(summaryData => {
      summaryData.forEach((data, index) => {
        this.summaries[index].data = data;
      })
    })

    let chartDataFiles: Observable<any>[] = [];
    this.graphs.forEach(chart => {
      chartDataFiles.push(this.getChartData(chart.apiCall()))
    })
    forkJoin(chartDataFiles).subscribe((chartData) => {
      chartData.forEach((data: {data: number[]}, index) => {
        
        let graph = {...this.graphs[index]};
        graph.generalSetting.datasets[0].data = data.data;
        const MAX_ARRAY_VALUE = Math.max(...data.data);
        let MAX_VALUE = 1;
        let ticksList = [];
        if(MAX_ARRAY_VALUE < 101) {
          MAX_VALUE = Math.ceil(MAX_ARRAY_VALUE/20)*20;
          graph.styleSetting.scales.y.min = 0;
          let counter = 0;
          while(MAX_VALUE === counter) {
            counter = counter + 20
            ticksList.push(counter)
          }
        }
        if(MAX_ARRAY_VALUE > 100 &&  MAX_ARRAY_VALUE < 1001) {
          MAX_VALUE = Math.ceil(MAX_ARRAY_VALUE/200)*200;
          graph.styleSetting.scales.y.min = 0;
          let counter = 0;
          while(MAX_VALUE === counter) {
            counter = counter + 20
            ticksList.push(counter)
          }
        }
        
        console.log(MAX_VALUE);
        console.log(ticksList);
        this.graphs[index] = {...graph};
      })
    })

  }

  getSummaryData(file: string): Observable<any> {
    const url = `./assets/data/dashboard-summaries/${file}`;
    console.log(url);
    return this.http.get(url);
  }
  getChartData(file: string): Observable<any> {
    const url = `./assets/data/dashboard-charts/${file}`;
    console.log(url);
    return this.http.get(url);
  }
}
