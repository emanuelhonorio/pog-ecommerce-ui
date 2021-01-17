import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEstoquesComponent } from './table-estoques.component';

describe('TableEstoquesComponent', () => {
  let component: TableEstoquesComponent;
  let fixture: ComponentFixture<TableEstoquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEstoquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEstoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
