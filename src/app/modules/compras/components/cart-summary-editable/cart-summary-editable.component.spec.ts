import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSummaryEditableComponent } from './cart-summary-editable.component';

describe('CartSummaryEditableComponent', () => {
  let component: CartSummaryEditableComponent;
  let fixture: ComponentFixture<CartSummaryEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSummaryEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSummaryEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
