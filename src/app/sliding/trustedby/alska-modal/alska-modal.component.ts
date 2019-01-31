import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alska-modal',
  templateUrl: './alska-modal.component.html',
  styleUrls: ['./alska-modal.component.styl']
})
export class AlskaModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlskaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
