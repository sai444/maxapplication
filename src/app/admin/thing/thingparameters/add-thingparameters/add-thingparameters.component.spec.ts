import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThingparametersComponent } from './add-thingparameters.component';

describe('AddThingparametersComponent', () => {
  let component: AddThingparametersComponent;
  let fixture: ComponentFixture<AddThingparametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThingparametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThingparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
