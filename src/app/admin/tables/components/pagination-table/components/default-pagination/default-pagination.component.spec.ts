import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPaginationComponent } from './default-pagination.component';

describe('DefaultPaginationComponent', () => {
  let component: DefaultPaginationComponent;
  let fixture: ComponentFixture<DefaultPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
