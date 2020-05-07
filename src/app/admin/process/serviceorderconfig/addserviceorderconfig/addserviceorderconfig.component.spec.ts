import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddserviceorderconfigComponent } from './addserviceorderconfig.component';

describe('AddserviceorderconfigComponent', () => {
  let component: AddserviceorderconfigComponent;
  let fixture: ComponentFixture<AddserviceorderconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddserviceorderconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddserviceorderconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
