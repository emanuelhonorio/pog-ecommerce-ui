import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItensPedidoMaterialComponent } from './table-itens-pedido-material.component';

describe('TableItensPedidoMaterialComponent', () => {
  let component: TableItensPedidoMaterialComponent;
  let fixture: ComponentFixture<TableItensPedidoMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItensPedidoMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItensPedidoMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
