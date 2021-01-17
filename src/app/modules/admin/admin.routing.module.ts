import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageCategoriasComponent } from './manage-categorias/manage-categorias.component';
import { ManageProdutosEstoqueComponent } from './manage-produtos-estoque/manage-produtos-estoque.component';
import { ManageProdutosComponent } from './manage-produtos/manage-produtos.component';
import { SaveProdutosComponent } from './pages/save-produtos/save-produtos.component';

const routes: Routes = [
  { path: 'categorias', component: ManageCategoriasComponent },
  { path: 'produtos', component: ManageProdutosComponent },
  {
    path: 'produtos/:produtoId/estoque',
    component: ManageProdutosEstoqueComponent,
  },
  { path: 'produtos/create', component: SaveProdutosComponent },
  { path: 'produtos/:produtoId/update', component: SaveProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
