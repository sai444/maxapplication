import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesstreeComponent } from './processtree.component';

describe('ProcesstreeComponent', () => {
  let component: ProcesstreeComponent;
  let fixture: ComponentFixture<ProcesstreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesstreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesstreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
