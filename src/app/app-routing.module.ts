import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoPageComponent } from './modules/carrinho/pages/carrinho-page/carrinho-page.component';
import { ProdutoDetailsComponent } from './modules/produtos/pages/produto-details/produto-details.component';
import { ProdutosPageComponent } from './modules/produtos/pages/produtos-page/produtos-page.component';

const routes: Routes = [
  { path: '', component: ProdutosPageComponent, pathMatch: 'full' },
  {
    path: 'produtos/:id/detalhes',
    component: ProdutoDetailsComponent,
    pathMatch: 'full',
  },
  {
    path: 'carrinho',
    component: CarrinhoPageComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
