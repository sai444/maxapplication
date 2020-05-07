import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessboardComponent } from './processboard.component';

describe('ProcessboardComponent', () => {
  let component: ProcessboardComponent;
  let fixture: ComponentFixture<ProcessboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
