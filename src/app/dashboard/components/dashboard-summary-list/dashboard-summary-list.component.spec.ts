import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSummaryListComponent } from './dashboard-summary-list.component';

describe('DashboardSummaryListComponent', () => {
  let component: DashboardSummaryListComponent;
  let fixture: ComponentFixture<DashboardSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
