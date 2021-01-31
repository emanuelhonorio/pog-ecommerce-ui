import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItensPedidoComponent } from './table-itens-pedido.component';

describe('TableItensPedidoComponent', () => {
  let component: TableItensPedidoComponent;
  let fixture: ComponentFixture<TableItensPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableItensPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItensPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
