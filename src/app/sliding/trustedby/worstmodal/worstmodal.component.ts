import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-worstmodal',
  templateUrl: './worstmodal.component.html',
  styleUrls: ['./worstmodal.component.styl']
})
export class WorstmodalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WorstmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
