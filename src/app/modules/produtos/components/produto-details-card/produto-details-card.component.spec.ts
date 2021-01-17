import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetailsCardComponent } from './produto-details-card.component';

describe('ProdutoDetailsCardComponent', () => {
  let component: ProdutoDetailsCardComponent;
  let fixture: ComponentFixture<ProdutoDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
