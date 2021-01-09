import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVariacoesComponent } from './table-variacoes.component';

describe('TableVariacoesComponent', () => {
  let component: TableVariacoesComponent;
  let fixture: ComponentFixture<TableVariacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVariacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVariacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
