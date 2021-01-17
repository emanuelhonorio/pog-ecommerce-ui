import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { CarrinhoModule } from './modules/carrinho/carrinho.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    ProdutosModule,
    CategoriasModule,
    CarrinhoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
