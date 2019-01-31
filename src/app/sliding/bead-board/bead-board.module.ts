import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeadBoardComponent } from './bead-board.component';
import { HomeModalModule } from './home-modal/home-modal.module';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { WeatherBarrierComponent } from './weather-barrier/weather-barrier.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BeadBoardComponent, WeatherBarrierComponent],
  imports: [
    CommonModule,
    HomeModalModule,
    SharedModule
  ],
  exports: [
    BeadBoardComponent
  ],
  entryComponents: [
    HomeModalComponent,
    WeatherBarrierComponent
  ]
})
export class BeadBoardModule { }
