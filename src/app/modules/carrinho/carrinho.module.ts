import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoPageComponent } from './pages/carrinho-page/carrinho-page.component';

import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CarrinhoPageComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, FormsModule],
})
export class CarrinhoModule {}
