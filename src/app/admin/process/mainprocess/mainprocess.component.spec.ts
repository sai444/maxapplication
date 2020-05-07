import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainprocessComponent } from './mainprocess.component';

describe('MainprocessComponent', () => {
  let component: MainprocessComponent;
  let fixture: ComponentFixture<MainprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
