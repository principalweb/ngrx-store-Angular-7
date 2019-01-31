import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsModalComponent } from './benefits-modal.component';

import { SharedModule } from '../../../shared/shared.module';
import { NonCombustibleComponent } from './non-combustible/non-combustible.component';
import { TermiteResistantComponent } from './termite-resistant/termite-resistant.component';
import { WeatherResistantComponent } from './weather-resistant/weather-resistant.component';
import { ImpactResistantComponent } from './impact-resistant/impact-resistant.component';
import { RotResistantComponent } from './rot-resistant/rot-resistant.component';

@NgModule({
  declarations: [BenefitsModalComponent, NonCombustibleComponent, TermiteResistantComponent, WeatherResistantComponent, ImpactResistantComponent, RotResistantComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BenefitsModalComponent
  ]
})
export class BenefitsModalModule { }
