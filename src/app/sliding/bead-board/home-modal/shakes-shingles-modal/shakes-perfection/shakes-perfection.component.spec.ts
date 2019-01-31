import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakesPerfectionComponent } from './shakes-perfection.component';

describe('ShakesPerfectionComponent', () => {
  let component: ShakesPerfectionComponent;
  let fixture: ComponentFixture<ShakesPerfectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakesPerfectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakesPerfectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
