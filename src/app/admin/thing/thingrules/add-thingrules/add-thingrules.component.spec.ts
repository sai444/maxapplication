import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingrulesComponent } from './add-thingrules.component';

describe('AddThingrulesComponent', () => {
  let component: AddThingrulesComponent;
  let fixture: ComponentFixture<AddThingrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThingrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThingrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
