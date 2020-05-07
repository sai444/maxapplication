import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddeptComponent } from './adddept.component';

describe('AdddeptComponent', () => {
  let component: AdddeptComponent;
  let fixture: ComponentFixture<AdddeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
