# Pog Ecommerce

**Pog Ecommerce** é um projeto desenvolvido por mim para meu portifólio. Na qual é um ecommerce para uma loja fictícia de produtos esportivos.

## Live Demo

Link : https://pog-ecommerce-ui.herokuapp.com/

## Back-end REST API

### Git Repository

Link: https://github.com/emanuelhonorio/pog-ecommerce

### Swagger Docs

Link: https://pog-ecommerce-api.herokuapp.com/docs.html

## Project Structure

```
📦src
 ┣ 📂app
 ┃ ┣ 📂core
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📂navigation-bar
 ┃ ┃ ┃ ┃ ┣ 📜navigation-bar.component.html
 ┃ ┃ ┃ ┃ ┣ 📜navigation-bar.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜navigation-bar.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜navigation-bar.component.ts
 ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┗ 📜auth.guard.ts
 ┃ ┃ ┣ 📂interceptors
 ┃ ┃ ┃ ┗ 📜auth.interceptor.ts
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┗ 📜api-models.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📜auth.service.spec.ts
 ┃ ┃ ┃ ┣ 📜auth.service.ts
 ┃ ┃ ┃ ┣ 📜carrinho.service.spec.ts
 ┃ ┃ ┃ ┣ 📜carrinho.service.ts
 ┃ ┃ ┃ ┣ 📜categorias.service.spec.ts
 ┃ ┃ ┃ ┣ 📜categorias.service.ts
 ┃ ┃ ┃ ┣ 📜compras.service.spec.ts
 ┃ ┃ ┃ ┣ 📜compras.service.ts
 ┃ ┃ ┃ ┣ 📜cores.service.spec.ts
 ┃ ┃ ┃ ┣ 📜cores.service.ts
 ┃ ┃ ┃ ┣ 📜enderecos.service.spec.ts
 ┃ ┃ ┃ ┣ 📜enderecos.service.ts
 ┃ ┃ ┃ ┣ 📜estoques.service.spec.ts
 ┃ ┃ ┃ ┣ 📜estoques.service.ts
 ┃ ┃ ┃ ┣ 📜produto-filter-store.service.spec.ts
 ┃ ┃ ┃ ┣ 📜produto-filter-store.service.ts
 ┃ ┃ ┃ ┣ 📜produtos.service.spec.ts
 ┃ ┃ ┃ ┣ 📜produtos.service.ts
 ┃ ┃ ┃ ┣ 📜tamanhos.service.spec.ts
 ┃ ┃ ┃ ┗ 📜tamanhos.service.ts
 ┃ ┃ ┗ 📜core.module.ts
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┗ 📂profile
 ┃ ┃ ┃ ┃ ┃ ┣ 📜profile.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜profile.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜profile.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜profile.component.ts
 ┃ ┃ ┃ ┗ 📜account.module.ts
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂dialog-create-categorias
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog-create-categorias.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog-create-categorias.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜dialog-create-categorias.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜dialog-create-categorias.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂form-create-estoques
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-create-estoques.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-create-estoques.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-create-estoques.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜form-create-estoques.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂form-create-produtos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-create-produtos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-create-produtos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-create-produtos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜form-create-produtos.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂fotos-field
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fotos-field.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fotos-field.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜fotos-field.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜fotos-field.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂multi-select-categorias
 ┃ ┃ ┃ ┃ ┃ ┣ 📜multi-select-categorias.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜multi-select-categorias.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜multi-select-categorias.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜multi-select-categorias.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂produto-estoque-form
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-estoque-form.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-estoque-form.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-estoque-form.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜produto-estoque-form.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂table-categorias
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-categorias.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-categorias.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-categorias.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜table-categorias.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂table-estoques
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-estoques.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-estoques.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-estoques.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜table-estoques.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂table-produto-estoque
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-produto-estoque.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-produto-estoque.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-produto-estoque.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜table-produto-estoque.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂table-produtos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-produtos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-produtos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-produtos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜table-produtos.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂manage-categorias
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-categorias.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-categorias.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-categorias.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜manage-categorias.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂manage-pedidos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-pedidos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-pedidos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-pedidos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜manage-pedidos.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂manage-produtos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-produtos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-produtos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-produtos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜manage-produtos.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂manage-produtos-estoque
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-produtos-estoque.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-produtos-estoque.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜manage-produtos-estoque.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜manage-produtos-estoque.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂save-produtos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜save-produtos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜save-produtos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜save-produtos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜save-produtos.component.ts
 ┃ ┃ ┃ ┣ 📜admin.module.ts
 ┃ ┃ ┃ ┗ 📜admin.routing.module.ts
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂signin
 ┃ ┃ ┃ ┃ ┃ ┣ 📜signin.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜signin.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜signin.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜signin.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┃ ┃ ┣ 📜signup.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜signup.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜signup.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜signup.component.ts
 ┃ ┃ ┃ ┗ 📜auth.module.ts
 ┃ ┃ ┣ 📂carrinho
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┗ 📂carrinho-page
 ┃ ┃ ┃ ┃ ┃ ┣ 📜carrinho-page.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜carrinho-page.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜carrinho-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜carrinho-page.component.ts
 ┃ ┃ ┃ ┗ 📜carrinho.module.ts
 ┃ ┃ ┣ 📂categorias
 ┃ ┃ ┃ ┗ 📜categorias.module.ts
 ┃ ┃ ┣ 📂compras
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📂cart-summary-editable
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cart-summary-editable.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cart-summary-editable.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cart-summary-editable.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜cart-summary-editable.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂checkout
 ┃ ┃ ┃ ┃ ┃ ┣ 📜checkout.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜checkout.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜checkout.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜checkout.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂pedidos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pedidos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pedidos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pedidos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜pedidos.component.ts
 ┃ ┃ ┃ ┗ 📜compras.module.ts
 ┃ ┃ ┣ 📂enderecos
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂form-enderecos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-enderecos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-enderecos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜form-enderecos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜form-enderecos.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂table-enderecos
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-enderecos.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-enderecos.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜table-enderecos.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜table-enderecos.component.ts
 ┃ ┃ ┃ ┗ 📜enderecos.module.ts
 ┃ ┃ ┗ 📂produtos
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂produto-card-a
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-card-a.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-card-a.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-card-a.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜produto-card-a.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂produto-details-card
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-details-card.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-details-card.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-details-card.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜produto-details-card.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂produto-filter-card
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-filter-card.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-filter-card.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-filter-card.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜produto-filter-card.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂produto-details
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-details.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-details.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto-details.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜produto-details.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂produtos-page
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produtos-page.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produtos-page.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produtos-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜produtos-page.component.ts
 ┃ ┃ ┃ ┗ 📜produtos.module.ts
 ┃ ┣ 📂shared
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📂confirmation-dialog
 ┃ ┃ ┃ ┃ ┣ 📜confirmation-dialog.component.html
 ┃ ┃ ┃ ┃ ┣ 📜confirmation-dialog.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜confirmation-dialog.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜confirmation-dialog.component.ts
 ┃ ┃ ┣ 📂util
 ┃ ┃ ┃ ┗ 📜formatter.ts
 ┃ ┃ ┗ 📜shared.module.ts
 ┃ ┣ 📜app-routing.module.ts
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.scss
 ┃ ┣ 📜app.component.spec.ts
 ┃ ┣ 📜app.component.ts
 ┃ ┗ 📜app.module.ts
 ┣ 📂assets
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜1.jpeg
 ┃ ┗ 📜logo.png
 ┣ 📂environments
 ┃ ┣ 📜environment.prod.ts
 ┃ ┗ 📜environment.ts
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜main.ts
 ┣ 📜polyfills.ts
 ┣ 📜styles.scss
 ┗ 📜test.ts
```
