import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnderecosComponent } from './form-enderecos.component';

describe('FormEnderecosComponent', () => {
  let component: FormEnderecosComponent;
  let fixture: ComponentFixture<FormEnderecosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEnderecosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnderecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
