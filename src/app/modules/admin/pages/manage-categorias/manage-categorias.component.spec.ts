import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCategoriasComponent } from './manage-categorias.component';

describe('ManageCategoriasComponent', () => {
  let component: ManageCategoriasComponent;
  let fixture: ComponentFixture<ManageCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
