import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageCategoriasComponent } from './pages/manage-categorias/manage-categorias.component';
import { ManageProdutosEstoqueComponent } from './pages/manage-produtos-estoque/manage-produtos-estoque.component';
import { ManageProdutosComponent } from './pages/manage-produtos/manage-produtos.component';
import { ManagePedidosComponent } from './pages/manage-pedidos/manage-pedidos.component';
import { SaveProdutosComponent } from './pages/save-produtos/save-produtos.component';

const routes: Routes = [
  { path: 'categorias', component: ManageCategoriasComponent },
  { path: 'produtos', component: ManageProdutosComponent },
  { path: 'pedidos', component: ManagePedidosComponent },
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
