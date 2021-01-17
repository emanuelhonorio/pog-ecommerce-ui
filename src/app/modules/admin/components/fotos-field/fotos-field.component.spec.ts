import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosFieldComponent } from './fotos-field.component';

describe('FotosFieldComponent', () => {
  let component: FotosFieldComponent;
  let fixture: ComponentFixture<FotosFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotosFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
