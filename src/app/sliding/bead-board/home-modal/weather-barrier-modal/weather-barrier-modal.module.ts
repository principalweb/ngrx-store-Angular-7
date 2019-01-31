import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherBarrierModalComponent } from './weather-barrier-modal.component';

@NgModule({
  declarations: [WeatherBarrierModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherBarrierModalComponent
  ]
})
export class WeatherBarrierModalModule { }
