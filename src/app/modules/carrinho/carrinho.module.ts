import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoPageComponent } from './pages/carrinho-page/carrinho-page.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

const material = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  declarations: [CarrinhoPageComponent],
  imports: [CommonModule, RouterModule, FormsModule, ...material],
})
export class CarrinhoModule {}
