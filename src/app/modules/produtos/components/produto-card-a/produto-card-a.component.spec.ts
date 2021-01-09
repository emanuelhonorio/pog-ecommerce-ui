import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCardAComponent } from './produto-card-a.component';

describe('ProdutoCardAComponent', () => {
  let component: ProdutoCardAComponent;
  let fixture: ComponentFixture<ProdutoCardAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCardAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
