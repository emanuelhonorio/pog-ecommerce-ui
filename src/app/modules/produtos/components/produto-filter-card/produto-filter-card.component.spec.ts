import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFilterCardComponent } from './produto-filter-card.component';

describe('ProdutoFilterCardComponent', () => {
  let component: ProdutoFilterCardComponent;
  let fixture: ComponentFixture<ProdutoFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoFilterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
