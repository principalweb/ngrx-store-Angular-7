import { Component, OnInit } from '@angular/core';
import { BenefitsModalComponent } from './benefits-modal/benefits-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-feature-benefits',
  templateUrl: './feature-benefits.component.html',
  styleUrls: ['./feature-benefits.component.styl']
})
export class FeatureBenefitsComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDetailModal(m) {
    const dialRef = this.dialog.open(BenefitsModalComponent, {
      width: '940px',
      height: '693px',
      data: {
        mode: m
      }
    })
  
  }

}
