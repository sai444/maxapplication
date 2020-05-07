import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnduserComponent } from './add-enduser.component';

describe('AddEnduserComponent', () => {
  let component: AddEnduserComponent;
  let fixture: ComponentFixture<AddEnduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
