import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-color-max-modal',
  templateUrl: './color-max-modal.component.html',
  styleUrls: ['./color-max-modal.component.styl']
})
export class ColorMaxModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ColorMaxModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
