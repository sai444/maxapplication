import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingparametersComponent } from './thingparameters.component';

describe('ThingparametersComponent', () => {
  let component: ThingparametersComponent;
  let fixture: ComponentFixture<ThingparametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingparametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
