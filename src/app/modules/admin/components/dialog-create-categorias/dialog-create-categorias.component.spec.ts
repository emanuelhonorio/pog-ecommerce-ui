import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCategoriasComponent } from './dialog-create-categorias.component';

describe('DialogCreateCategoriasComponent', () => {
  let component: DialogCreateCategoriasComponent;
  let fixture: ComponentFixture<DialogCreateCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
