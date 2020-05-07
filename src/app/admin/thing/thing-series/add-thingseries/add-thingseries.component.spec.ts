import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingseriesComponent } from './add-thingseries.component';

describe('AddThingseriesComponent', () => {
  let component: AddThingseriesComponent;
  let fixture: ComponentFixture<AddThingseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThingseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThingseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
