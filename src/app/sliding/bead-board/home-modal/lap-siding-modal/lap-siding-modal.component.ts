import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lap-siding-modal',
  templateUrl: './lap-siding-modal.component.html',
  styleUrls: ['./lap-siding-modal.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class LapSidingModalComponent implements OnInit {
  curBtn = 'traditional'
  constructor() { }

  ngOnInit() {
  }

}
