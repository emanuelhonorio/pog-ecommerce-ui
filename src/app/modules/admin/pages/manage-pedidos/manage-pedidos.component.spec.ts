import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePedidosComponent } from './manage-pedidos.component';

describe('ManagePedidosComponent', () => {
  let component: ManagePedidosComponent;
  let fixture: ComponentFixture<ManagePedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
