import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import cards from 'src/app/layouts/cards.layout';
import DashboardCard from '../../../types/DashboardSummary';

@Component({
  selector: 'app-dashboard-summary-list',
  templateUrl: './dashboard-summary-list.component.html',
  styleUrls: ['./dashboard-summary-list.component.css']
})
export class DashboardSummaryListComponent implements OnInit {
  /**
   * summaries variable holds list of summary cards. Initializing summaries data with empty array
   */
  summaries: DashboardCard[] = cards as DashboardCard[];

  constructor(private http: HttpClient) {
  }

  /**
   * Setting summary Data on component load
   */
  ngOnInit() {
    this.setSummaryData();
  }

  /**
   * Joining all the data for different summary card and setting it to summaries variable
   */
  setSummaryData() {
    let summaryDataFiles: Observable<any>[] = [];
    this.summaries.forEach(summary => {
      summaryDataFiles.push(this.getSummaryData(summary.apiCall()))
    })
    forkJoin(summaryDataFiles).subscribe(summaryData => {
      summaryData.forEach((data, index) => {
        this.summaries[index].data = data;
      })
    })
  }

/**
   * Fetch Data from local dummy data from assets folder
   * @param {string} file 
   * @returns {Observable}
   */
  getSummaryData(file: string): Observable<any> {
    const url = `./assets/data/dashboard-summaries/${file}`;
    return this.http.get(url);
  }

}
