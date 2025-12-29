import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resume.dialog',
  imports: [],
  templateUrl: './resume.dialog.component.html',
  styleUrl: './resume.dialog.component.scss'
})
export class ResumeDialogComponent {
  step = 0;

  constructor(
    private dialogRef: MatDialogRef<ResumeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.step = data.step ?? 0;
  }

  next() {
    if (this.step < 2) this.step++;
  }

  prev() {
    if (this.step > 0) this.step--;
  }

  close() {
    this.dialogRef.close();
  }
}
