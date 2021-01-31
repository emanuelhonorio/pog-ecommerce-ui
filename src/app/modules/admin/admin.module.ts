import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageCategoriasComponent } from './pages/manage-categorias/manage-categorias.component';
import { DialogCreateCategoriasComponent } from './components/dialog-create-categorias/dialog-create-categorias.component';
import { AdminRoutingModule } from './admin.routing.module';
import { TableProdutoEstoqueComponent } from './components/table-produto-estoque/table-produto-estoque.component';

import { MatTableModule } from '@angular/material/table';
import { TableCategoriasComponent } from './components/table-categorias/table-categorias.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ManageProdutosComponent } from './pages/manage-produtos/manage-produtos.component';
import { TableProdutosComponent } from './components/table-produtos/table-produtos.component';
import { FormCreateProdutosComponent } from './components/form-create-produtos/form-create-produtos.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MultiSelectCategoriasComponent } from './components/multi-select-categorias/multi-select-categorias.component';
import { ManageProdutosEstoqueComponent } from './pages/manage-produtos-estoque/manage-produtos-estoque.component';
import { ProdutoEstoqueFormComponent } from './components/produto-estoque-form/produto-estoque-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { FormCreateEstoquesComponent } from './components/form-create-estoques/form-create-estoques.component';
import { TableEstoquesComponent } from './components/table-estoques/table-estoques.component';
import { SaveProdutosComponent } from './pages/save-produtos/save-produtos.component';
import { FotosFieldComponent } from './components/fotos-field/fotos-field.component';
import { ManagePedidosComponent } from './pages/manage-pedidos/manage-pedidos.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TablePedidosComponent } from './components/table-pedidos/table-pedidos.component';
import { TableItensPedidoComponent } from './components/table-itens-pedido/table-itens-pedido.component';
import { TablePedidosMaterialComponent } from './components/table-pedidos-material/table-pedidos-material.component';
import { TableItensPedidoMaterialComponent } from './components/table-itens-pedido-material/table-itens-pedido-material.component';
import { DropdownUpdateStatusPedidoComponent } from './components/dropdown-update-status-pedido/dropdown-update-status-pedido.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    ClickOutsideDirective,
    ManageCategoriasComponent,
    TableCategoriasComponent,
    DialogCreateCategoriasComponent,
    ManageProdutosComponent,
    TableProdutosComponent,
    FormCreateProdutosComponent,
    MultiSelectCategoriasComponent,
    ManageProdutosEstoqueComponent,
    ProdutoEstoqueFormComponent,
    TableProdutoEstoqueComponent,
    FormCreateEstoquesComponent,
    TableEstoquesComponent,
    SaveProdutosComponent,
    FotosFieldComponent,
    ManagePedidosComponent,
    TablePedidosComponent,
    TableItensPedidoComponent,
    TablePedidosMaterialComponent,
    TableItensPedidoMaterialComponent,
    DropdownUpdateStatusPedidoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
})
export class AdminModule {}
