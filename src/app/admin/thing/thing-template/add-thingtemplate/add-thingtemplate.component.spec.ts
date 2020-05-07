import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingtemplateComponent } from './add-thingtemplate.component';

describe('AddThingtemplateComponent', () => {
  let component: AddThingtemplateComponent;
  let fixture: ComponentFixture<AddThingtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThingtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThingtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
