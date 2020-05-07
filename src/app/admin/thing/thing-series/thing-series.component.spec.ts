import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingSeriesComponent } from './thing-series.component';

describe('ThingSeriesComponent', () => {
  let component: ThingSeriesComponent;
  let fixture: ComponentFixture<ThingSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
