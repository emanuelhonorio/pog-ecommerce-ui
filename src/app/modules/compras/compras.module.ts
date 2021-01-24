import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartSummaryEditableComponent } from './components/cart-summary-editable/cart-summary-editable.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { MatTabsModule } from '@angular/material/tabs';

const material = [MatIconModule, MatButtonModule, MatTabsModule];

@NgModule({
  declarations: [
    CheckoutComponent,
    CartSummaryEditableComponent,
    PedidosComponent,
  ],
  imports: [CommonModule, RouterModule, ...material],
})
export class ComprasModule {}
