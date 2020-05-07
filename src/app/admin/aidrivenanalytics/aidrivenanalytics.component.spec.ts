import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidrivenanalyticsComponent } from './aidrivenanalytics.component';

describe('AidrivenanalyticsComponent', () => {
  let component: AidrivenanalyticsComponent;
  let fixture: ComponentFixture<AidrivenanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidrivenanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidrivenanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
