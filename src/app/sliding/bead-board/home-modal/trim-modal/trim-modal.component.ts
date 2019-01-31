import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-trim-modal',
  templateUrl: './trim-modal.component.html',
  styleUrls: ['./trim-modal.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class TrimModalComponent implements OnInit {
  curBtn = 'traditional';

  constructor() { }

  ngOnInit() {
  }

}
