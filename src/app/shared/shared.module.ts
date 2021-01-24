import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const material = [MatDialogModule, MatButtonModule];

const IEComponents = [ConfirmationDialogComponent];

@NgModule({
  declarations: [...IEComponents],
  imports: [CommonModule, ...material],
  exports: [...IEComponents],
})
export class SharedModule {}
