import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motivador1Component } from './motivador1.component';

describe('Motivador1Component', () => {
  let component: Motivador1Component;
  let fixture: ComponentFixture<Motivador1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Motivador1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Motivador1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
