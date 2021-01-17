import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveProdutosComponent } from './save-produtos.component';

describe('SaveProdutosComponent', () => {
  let component: SaveProdutosComponent;
  let fixture: ComponentFixture<SaveProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
