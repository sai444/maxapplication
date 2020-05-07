import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingTemplateComponent } from './thing-template.component';

describe('ThingTemplateComponent', () => {
  let component: ThingTemplateComponent;
  let fixture: ComponentFixture<ThingTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
