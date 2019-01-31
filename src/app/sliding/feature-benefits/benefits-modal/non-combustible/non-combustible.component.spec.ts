import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCombustibleComponent } from './non-combustible.component';

describe('NonCombustibleComponent', () => {
  let component: NonCombustibleComponent;
  let fixture: ComponentFixture<NonCombustibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonCombustibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
