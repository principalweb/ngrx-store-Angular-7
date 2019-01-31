import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-weather-barrier',
  templateUrl: './weather-barrier.component.html',
  styleUrls: ['./weather-barrier.component.styl'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherBarrierComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WeatherBarrierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close()
  }

}
