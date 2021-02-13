import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartSummaryEditableComponent } from './components/cart-summary-editable/cart-summary-editable.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PaymentOptionComponent } from './components/payment-option/payment-option.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const material = [
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    CheckoutComponent,
    CartSummaryEditableComponent,
    PedidosComponent,
    PaymentOptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...material,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComprasModule {}
