import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  selectedDate: Date | null = null; 

  constructor(public dialogRef: MatDialogRef<PopupComponent>) {}

  confirmDate(): void {
    this.dialogRef.close(this.selectedDate); 
  }

  cancel(): void {
    this.dialogRef.close(); 
  }
}