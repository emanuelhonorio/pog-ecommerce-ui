import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProdutosComponent } from './manage-produtos.component';

describe('ManageProdutosComponent', () => {
  let component: ManageProdutosComponent;
  let fixture: ComponentFixture<ManageProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
