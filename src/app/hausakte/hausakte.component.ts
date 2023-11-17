import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-hausakte',
  templateUrl: './hausakte.component.html',
  styleUrls: ['./hausakte.component.css']
})
export class HausakteComponent {

  wunschtermin: string | null = 'keiner'; 
  activeTab: string = 'kurzinfo';

  constructor(public dialog: MatDialog) {}

  openWunschterminPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '75%',
    });

    


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.wunschtermin = new Date(result).toLocaleDateString();
      }
    });
  }

  
}

