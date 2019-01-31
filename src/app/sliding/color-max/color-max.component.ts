import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ColorMaxModalComponent } from './color-max-modal/color-max-modal.component';

@Component({
  selector: 'app-color-max',
  templateUrl: './color-max.component.html',
  styleUrls: ['./color-max.component.styl']
})
export class ColorMaxComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  viewColors() {
    const dialRef = this.dialog.open(ColorMaxModalComponent, {
      width: '863px',
      height: '680px',
    })
  }

}
