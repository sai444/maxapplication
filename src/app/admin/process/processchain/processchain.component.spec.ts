import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesschainComponent } from './processchain.component';

describe('ProcesschainComponent', () => {
  let component: ProcesschainComponent;
  let fixture: ComponentFixture<ProcesschainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesschainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesschainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
