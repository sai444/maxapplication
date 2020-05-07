import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainprocessComponent } from './add-mainprocess.component';

describe('AddMainprocessComponent', () => {
  let component: AddMainprocessComponent;
  let fixture: ComponentFixture<AddMainprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
