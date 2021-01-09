import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableProdutosComponent } from './table-produtos.component';

describe('TableProdutosComponent', () => {
  let component: TableProdutosComponent;
  let fixture: ComponentFixture<TableProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
