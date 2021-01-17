import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetailsComponent } from './produto-details.component';

describe('ProdutoDetailsComponent', () => {
  let component: ProdutoDetailsComponent;
  let fixture: ComponentFixture<ProdutoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
