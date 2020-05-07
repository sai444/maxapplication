import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsrorderComponent } from './addsrorder.component';

describe('AddsrorderComponent', () => {
  let component: AddsrorderComponent;
  let fixture: ComponentFixture<AddsrorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsrorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsrorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
