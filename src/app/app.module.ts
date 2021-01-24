import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { CarrinhoModule } from './modules/carrinho/carrinho.module';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { EnderecosModule } from './modules/enderecos/enderecos.module';

import { ToastrModule } from 'ngx-toastr';
import { ComprasModule } from './modules/compras/compras.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    ProdutosModule,
    CategoriasModule,
    CarrinhoModule,
    AuthModule,
    AccountModule,
    EnderecosModule,
    ComprasModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
