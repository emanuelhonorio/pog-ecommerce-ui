import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProdutosEstoqueComponent } from './manage-produtos-estoque.component';

describe('ManageProdutosEstoqueComponent', () => {
  let component: ManageProdutosEstoqueComponent;
  let fixture: ComponentFixture<ManageProdutosEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProdutosEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProdutosEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
