import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEnderecosComponent } from './components/table-enderecos/table-enderecos.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormEnderecosComponent } from './components/form-enderecos/form-enderecos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const material = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [TableEnderecosComponent, FormEnderecosComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ...material],
  exports: [TableEnderecosComponent, FormEnderecosComponent],
})
export class EnderecosModule {}
