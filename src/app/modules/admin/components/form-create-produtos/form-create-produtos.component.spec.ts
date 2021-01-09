import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateProdutosComponent } from './form-create-produtos.component';

describe('FormCreateProdutosComponent', () => {
  let component: FormCreateProdutosComponent;
  let fixture: ComponentFixture<FormCreateProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
