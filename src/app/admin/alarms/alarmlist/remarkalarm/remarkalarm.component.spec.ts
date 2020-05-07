import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarkalarmComponent } from './remarkalarm.component';

describe('RemarkalarmComponent', () => {
  let component: RemarkalarmComponent;
  let fixture: ComponentFixture<RemarkalarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarkalarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarkalarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
