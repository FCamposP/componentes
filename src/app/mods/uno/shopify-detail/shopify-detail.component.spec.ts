import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyDetailComponent } from './shopify-detail.component';

describe('ShopifyDetailComponent', () => {
  let component: ShopifyDetailComponent;
  let fixture: ComponentFixture<ShopifyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopifyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopifyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
