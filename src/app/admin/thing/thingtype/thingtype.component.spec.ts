import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingtypeComponent } from './thingtype.component';

describe('ThingtypeComponent', () => {
  let component: ThingtypeComponent;
  let fixture: ComponentFixture<ThingtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
