import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUpdateStatusPedidoComponent } from './dropdown-update-status-pedido.component';

describe('DropdownUpdateStatusPedidoComponent', () => {
  let component: DropdownUpdateStatusPedidoComponent;
  let fixture: ComponentFixture<DropdownUpdateStatusPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownUpdateStatusPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownUpdateStatusPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
