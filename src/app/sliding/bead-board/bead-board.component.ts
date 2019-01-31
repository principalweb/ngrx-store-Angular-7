import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { HomeModalComponent } from './home-modal/home-modal.component';
import { WeatherBarrierComponent } from './weather-barrier/weather-barrier.component';

@Component({
  selector: 'app-bead-board',
  templateUrl: './bead-board.component.html',
  styleUrls: ['./bead-board.component.styl']
})
export class BeadBoardComponent implements OnInit {
  display: boolean = false;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openHomeModal(m) {
    const dialRef = this.dialog.open(HomeModalComponent, {
      width: '940px',
      height: '725px',
      data: {
        mode: m
      }
    })
  }

  openWeather() {
    const dialRef = this.dialog.open(WeatherBarrierComponent, {
      width: '888px',
      height: '635px',
    })
    // this.display = true;
  }

}
