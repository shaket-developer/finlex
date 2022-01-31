import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGraphListComponent } from './dashboard-graph-list.component';

describe('DashboardGraphListComponent', () => {
  let component: DashboardGraphListComponent;
  let fixture: ComponentFixture<DashboardGraphListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGraphListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGraphListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
