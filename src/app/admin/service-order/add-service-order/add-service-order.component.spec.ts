import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceOrderComponent } from './add-service-order.component';

describe('AddServiceOrderComponent', () => {
  let component: AddServiceOrderComponent;
  let fixture: ComponentFixture<AddServiceOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
