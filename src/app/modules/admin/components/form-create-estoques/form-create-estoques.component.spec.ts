import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateEstoquesComponent } from './form-create-estoques.component';

describe('FormCreateEstoquesComponent', () => {
  let component: FormCreateEstoquesComponent;
  let fixture: ComponentFixture<FormCreateEstoquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateEstoquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateEstoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
