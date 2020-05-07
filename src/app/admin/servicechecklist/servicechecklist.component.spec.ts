import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicechecklistComponent } from './servicechecklist.component';

describe('ServicechecklistComponent', () => {
  let component: ServicechecklistComponent;
  let fixture: ComponentFixture<ServicechecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicechecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicechecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
