import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmTitle: string = 'Confirme';
  public confirmMessage: string = 'Você tem certeza?';

  ngOnInit() {
    if (this.data?.title) {
      this.confirmTitle = this.data?.title;
    }
    if (this.data?.message) {
      this.confirmMessage = this.data?.message;
    }
  }
}
