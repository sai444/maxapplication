import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSysuserComponent } from './add-sysuser.component';

describe('AddSysuserComponent', () => {
  let component: AddSysuserComponent;
  let fixture: ComponentFixture<AddSysuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSysuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSysuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
