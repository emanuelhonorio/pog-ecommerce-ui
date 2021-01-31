import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePedidosMaterialComponent } from './table-pedidos-material.component';

describe('TablePedidosMaterialComponent', () => {
  let component: TablePedidosMaterialComponent;
  let fixture: ComponentFixture<TablePedidosMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePedidosMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePedidosMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
