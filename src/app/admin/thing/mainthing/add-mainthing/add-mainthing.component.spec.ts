import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainthingComponent } from './add-mainthing.component';

describe('AddMainthingComponent', () => {
  let component: AddMainthingComponent;
  let fixture: ComponentFixture<AddMainthingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainthingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainthingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
