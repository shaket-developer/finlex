import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import graph from '../../../layouts/graphs.layout';

@Component({
  selector: 'app-dashboard-graph-list',
  templateUrl: './dashboard-graph-list.component.html',
  styleUrls: ['./dashboard-graph-list.component.css']
})
export class DashboardGraphListComponent implements OnInit {

  graphs = graph;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.setGraphData();
  }

  setGraphData() {
    let chartDataFiles: Observable<any>[] = [];
    this.graphs.forEach(chart => {
      chartDataFiles.push(this.getChartData(chart.apiCall()))
    })
    forkJoin(chartDataFiles).subscribe((chartData) => {
      chartData.forEach((data: { data: number[] }, index) => {
        let graph = { ...this.graphs[index] };
        graph.generalSetting.datasets[0].data = data.data;
        const MAX_ARRAY_VALUE = Math.max(...data.data);
        let MAX_VALUE = 1;
        let ticksList = [];
        if (MAX_ARRAY_VALUE < 101) {
          MAX_VALUE = Math.ceil(MAX_ARRAY_VALUE / 20) * 20;
          graph.styleSetting.scales.y.min = 0;
          let counter = 0;
          while (MAX_VALUE === counter) {
            counter = counter + 20
            ticksList.push(counter)
          }
        }
        if (MAX_ARRAY_VALUE > 100 && MAX_ARRAY_VALUE < 1001) {
          MAX_VALUE = Math.ceil(MAX_ARRAY_VALUE / 200) * 200;
          graph.styleSetting.scales.y.min = 0;
          let counter = 0;
          while (MAX_VALUE === counter) {
            counter = counter + 20
            ticksList.push(counter)
          }
        }
        this.graphs[index] = { ...graph };
      })
    })
  }

  /**
   * 
   * @param {string} file 
   * @returns {Observable}
   */
  getChartData(file: string): Observable<any> {
    const url = `./assets/data/dashboard-charts/${file}`;
    return this.http.get(url);
  }

}
