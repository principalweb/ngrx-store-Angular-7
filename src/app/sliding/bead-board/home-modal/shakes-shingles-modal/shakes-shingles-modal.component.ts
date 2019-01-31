import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shakes-shingles-modal',
  templateUrl: './shakes-shingles-modal.component.html',
  styleUrls: ['./shakes-shingles-modal.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class ShakesShinglesModalComponent implements OnInit {
  curBtn = 'perfection';

  constructor() { }

  ngOnInit() {
  }

}
