import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainthingComponent } from './mainthing.component';

describe('MainthingComponent', () => {
  let component: MainthingComponent;
  let fixture: ComponentFixture<MainthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
