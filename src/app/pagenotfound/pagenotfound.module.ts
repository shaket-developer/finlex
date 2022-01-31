import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './component/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const dashboardroutes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardroutes)
  ]
})
export class PagenotfoundModule { }
