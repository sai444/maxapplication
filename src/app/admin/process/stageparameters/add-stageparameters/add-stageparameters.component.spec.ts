import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStageparametersComponent } from './add-stageparameters.component';

describe('AddStageparametersComponent', () => {
  let component: AddStageparametersComponent;
  let fixture: ComponentFixture<AddStageparametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStageparametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStageparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
