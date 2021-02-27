import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcoolComponent } from './carcool.component';

describe('CarcoolComponent', () => {
  let component: CarcoolComponent;
  let fixture: ComponentFixture<CarcoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
