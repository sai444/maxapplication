import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCheckpointsComponent } from './add-checkpoints.component';

describe('AddCheckpointsComponent', () => {
  let component: AddCheckpointsComponent;
  let fixture: ComponentFixture<AddCheckpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCheckpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCheckpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
