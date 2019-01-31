import { Component, OnInit } from '@angular/core';
import { COMPARING_OPTIONS } from '../../shared/consts';

@Component({
  selector: 'app-comparing-options',
  templateUrl: './comparing-options.component.html',
  styleUrls: ['./comparing-options.component.styl']
})
export class ComparingOptionsComponent implements OnInit {
  comparingOptions = [];
  constructor() { }

  ngOnInit() {
    this.comparingOptions = COMPARING_OPTIONS;
  }

}
