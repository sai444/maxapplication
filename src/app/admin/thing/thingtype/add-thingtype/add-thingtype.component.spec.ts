import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingtypeComponent } from './add-thingtype.component';

describe('AddThingtypeComponent', () => {
  let component: AddThingtypeComponent;
  let fixture: ComponentFixture<AddThingtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThingtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
