import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingrulesComponent } from './thingrules.component';

describe('ThingrulesComponent', () => {
  let component: ThingrulesComponent;
  let fixture: ComponentFixture<ThingrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
