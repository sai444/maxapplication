import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceorderconfigComponent } from './serviceorderconfig.component';

describe('ServiceorderconfigComponent', () => {
  let component: ServiceorderconfigComponent;
  let fixture: ComponentFixture<ServiceorderconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceorderconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceorderconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
