import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEnderecosComponent } from './table-enderecos.component';

describe('TableEnderecosComponent', () => {
  let component: TableEnderecosComponent;
  let fixture: ComponentFixture<TableEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEnderecosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
