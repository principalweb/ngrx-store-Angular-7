import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlidingRoutingModule } from './sliding-routing.module';
import { SlidingComponent } from './sliding.component';
import { EvolutionModule } from './evolution/evolution.module';
import { CostvsvalueModule } from './costvsvalue/costvsvalue.module';
import { Over75Module } from './over75/over75.module';
import { YearhistoryModule } from './yearhistory/yearhistory.module';
import { TrustedbyModule } from './trustedby/trustedby.module';
import { FeatureBenefitsModule } from './feature-benefits/feature-benefits.module';
import { BeadBoardModule } from './bead-board/bead-board.module';
import { ColorMaxModule } from './color-max/color-max.module';
import { RightChoiceModule } from './right-choice/right-choice.module';
import { ComparingOptionsModule } from './comparing-options/comparing-options.module';
import { ManyFinancingModule } from './many-financing/many-financing.module';
import { DesignYourModule } from './design-your/design-your.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SlidingComponent
  ],
  imports: [
    CommonModule,
    SlidingRoutingModule,
    EvolutionModule,
    CostvsvalueModule,
    Over75Module,
    YearhistoryModule,
    TrustedbyModule,
    SharedModule,
    FeatureBenefitsModule,
    BeadBoardModule,
    ColorMaxModule,
    RightChoiceModule,
    ComparingOptionsModule,
    ManyFinancingModule,
    DesignYourModule
  ]
})
export class SlidingModule { }
