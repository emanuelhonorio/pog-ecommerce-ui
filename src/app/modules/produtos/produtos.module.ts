import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCardAComponent } from './components/produto-card-a/produto-card-a.component';
import { ProdutosPageComponent } from './pages/produtos-page/produtos-page.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { ProdutoFilterCardComponent } from './components/produto-filter-card/produto-filter-card.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProdutoDetailsCardComponent } from './components/produto-details-card/produto-details-card.component';
import { ProdutoDetailsComponent } from './pages/produto-details/produto-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProdutoCardAComponent,
    ProdutosPageComponent,
    ProdutoFilterCardComponent,
    ProdutoDetailsCardComponent,
    ProdutoDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSliderModule,
  ],
})
export class ProdutosModule {}
