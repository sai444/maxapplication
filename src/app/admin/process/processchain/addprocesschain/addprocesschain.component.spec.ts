import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprocesschainComponent } from './addprocesschain.component';

describe('AddprocesschainComponent', () => {
  let component: AddprocesschainComponent;
  let fixture: ComponentFixture<AddprocesschainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprocesschainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprocesschainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
