import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProdutoEstoqueComponent } from './table-produto-estoque.component';

describe('TableProdutoEstoqueComponent', () => {
  let component: TableProdutoEstoqueComponent;
  let fixture: ComponentFixture<TableProdutoEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProdutoEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProdutoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
