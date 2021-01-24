import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './modules/account/pages/profile/profile.component';
import { SigninComponent } from './modules/auth/pages/signin/signin.component';
import { SignupComponent } from './modules/auth/pages/signup/signup.component';
import { CarrinhoPageComponent } from './modules/carrinho/pages/carrinho-page/carrinho-page.component';
import { CheckoutComponent } from './modules/compras/pages/checkout/checkout.component';
import { PedidosComponent } from './modules/compras/pages/pedidos/pedidos.component';
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
    path: 'entrar',
    component: SigninComponent,
  },
  {
    path: 'cadastrar',
    component: SignupComponent,
  },
  {
    path: 'perfil',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
