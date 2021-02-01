import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
  isUpdating: boolean;
}

@Component({
  selector: 'app-dialog-create-categorias',
  templateUrl: './dialog-create-categorias.component.html',
  styleUrls: ['./dialog-create-categorias.component.scss'],
})
export class DialogCreateCategoriasComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCreateCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
