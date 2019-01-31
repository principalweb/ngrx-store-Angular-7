import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModalComponent } from './home-modal.component';
import { BeardboardModalComponent } from './beardboard-modal/beardboard-modal.component';
import { TrimModalModule } from './trim-modal/trim-modal.module';
import { PanelModalModule } from './panel-modal/panel-modal.module';
import { ShakesShinglesModalModule } from './shakes-shingles-modal/shakes-shingles-modal.module';
import { SoffitModalComponent } from './soffit-modal/soffit-modal.component';
import { LapSidingModalModule } from './lap-siding-modal/lap-siding-modal.module';
import { WeatherBarrierModalModule } from './weather-barrier-modal/weather-barrier-modal.module';

@NgModule({
  declarations: [
    HomeModalComponent, 
    BeardboardModalComponent, 
    SoffitModalComponent
  ],
  imports: [
    CommonModule,
    TrimModalModule,
    PanelModalModule,
    ShakesShinglesModalModule,
    LapSidingModalModule,
    WeatherBarrierModalModule
  ],
  exports: [
    HomeModalComponent
  ]
})
export class HomeModalModule { }
