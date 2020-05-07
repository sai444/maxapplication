import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageparametersComponent } from './stageparameters.component';

describe('StageparametersComponent', () => {
  let component: StageparametersComponent;
  let fixture: ComponentFixture<StageparametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageparametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
