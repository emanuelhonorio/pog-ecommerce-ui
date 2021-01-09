import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectCategoriasComponent } from './multi-select-categorias.component';

describe('MultiSelectCategoriasComponent', () => {
  let component: MultiSelectCategoriasComponent;
  let fixture: ComponentFixture<MultiSelectCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
