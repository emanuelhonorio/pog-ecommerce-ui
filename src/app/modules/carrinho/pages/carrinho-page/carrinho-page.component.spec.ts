import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoPageComponent } from './carrinho-page.component';

describe('CarrinhoPageComponent', () => {
  let component: CarrinhoPageComponent;
  let fixture: ComponentFixture<CarrinhoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
