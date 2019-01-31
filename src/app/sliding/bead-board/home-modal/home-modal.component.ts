import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-home-modal',
  templateUrl: './home-modal.component.html',
  styleUrls: ['./home-modal.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class HomeModalComponent implements OnInit {
  curPage = ''
  constructor(
    public dialogRef: MatDialogRef<HomeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.curPage = this.data.mode; }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
