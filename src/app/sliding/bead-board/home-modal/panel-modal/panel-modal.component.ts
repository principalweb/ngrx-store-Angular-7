import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-panel-modal',
  templateUrl: './panel-modal.component.html',
  styleUrls: ['./panel-modal.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class PanelModalComponent implements OnInit {
  curBtn = 'traditional';
  constructor() { }

  ngOnInit() {
  }

}
