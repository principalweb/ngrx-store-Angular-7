import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-benefits-modal',
  templateUrl: './benefits-modal.component.html',
  styleUrls: ['./benefits-modal.component.styl']
})
export class BenefitsModalComponent implements OnInit {
  curPage = 'fire';

  constructor(
    public dialogRef: MatDialogRef<BenefitsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.curPage = this.data.mode; }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close()
  }

  setCurPage(curPage) {
    this.curPage = curPage;
  }

}
