import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateVariacoesComponent } from './form-create-variacoes.component';

describe('FormCreateVariacoesComponent', () => {
  let component: FormCreateVariacoesComponent;
  let fixture: ComponentFixture<FormCreateVariacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateVariacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateVariacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
