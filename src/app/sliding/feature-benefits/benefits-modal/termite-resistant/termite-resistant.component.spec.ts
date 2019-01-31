import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermiteResistantComponent } from './termite-resistant.component';

describe('TermiteResistantComponent', () => {
  let component: TermiteResistantComponent;
  let fixture: ComponentFixture<TermiteResistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermiteResistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermiteResistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
