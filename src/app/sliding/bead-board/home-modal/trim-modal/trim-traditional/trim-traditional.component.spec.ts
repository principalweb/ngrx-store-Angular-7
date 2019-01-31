import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimTraditionalComponent } from './trim-traditional.component';

describe('TrimTraditionalComponent', () => {
  let component: TrimTraditionalComponent;
  let fixture: ComponentFixture<TrimTraditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimTraditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimTraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
