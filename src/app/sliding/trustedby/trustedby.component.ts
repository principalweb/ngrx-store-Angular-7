import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { WorstmodalComponent } from './worstmodal/worstmodal.component';
import { KbhomeModalComponent } from './kbhome-modal/kbhome-modal.component';
import { TollModalComponent } from './toll-modal/toll-modal.component';
import { AlskaModalComponent } from './alska-modal/alska-modal.component';

@Component({
  selector: 'app-trustedby',
  templateUrl: './trustedby.component.html',
  styleUrls: ['./trustedby.component.styl']
})
export class TrustedbyComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDetailModal() {
    const dialRef = this.dialog.open(WorstmodalComponent, {
      width: '940px',
      height: '677px',
    })
  
  }

  openKBDetailModal() {
    const dialRef = this.dialog.open(KbhomeModalComponent, {
      width: '940px',
      height: '677px',
    })
  }

  openTrollDetailModal() {
    const dialRef = this.dialog.open(TollModalComponent, {
      width: '940px',
      height: '677px',
    })
  }

  openalaskaDetailModal() {
    const dialRef = this.dialog.open(AlskaModalComponent, {
      width: '940px',
      height: '677px',
    })
  }

}
