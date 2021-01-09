import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageCategoriasComponent } from '../../manage-categorias/manage-categorias.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-dialog-create-categorias',
  templateUrl: './dialog-create-categorias.component.html',
  styleUrls: ['./dialog-create-categorias.component.scss']
})
export class DialogCreateCategoriasComponent {

  constructor(
    public dialogRef: MatDialogRef<ManageCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
