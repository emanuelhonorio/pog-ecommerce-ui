import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCardAComponent } from './components/produto-card-a/produto-card-a.component';
import { ProdutosPageComponent } from './pages/produtos-page/produtos-page.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [ProdutoCardAComponent, ProdutosPageComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class ProdutosModule { }
