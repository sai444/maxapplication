import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStagestemplateComponent } from './add-stagestemplate.component';

describe('AddStagestemplateComponent', () => {
  let component: AddStagestemplateComponent;
  let fixture: ComponentFixture<AddStagestemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStagestemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStagestemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
