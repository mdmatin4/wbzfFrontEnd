import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersetChartComponent } from './superset-chart.component';

describe('SupersetChartComponent', () => {
  let component: SupersetChartComponent;
  let fixture: ComponentFixture<SupersetChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupersetChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupersetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
