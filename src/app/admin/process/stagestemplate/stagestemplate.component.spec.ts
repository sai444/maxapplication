import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagestemplateComponent } from './stagestemplate.component';

describe('StagestemplateComponent', () => {
  let component: StagestemplateComponent;
  let fixture: ComponentFixture<StagestemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagestemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagestemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
