import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBenefitsComponent } from './feature-benefits.component';
import { BenefitsModalModule } from './benefits-modal/benefits-modal.module';
import { BenefitsModalComponent } from './benefits-modal/benefits-modal.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [FeatureBenefitsComponent],
  imports: [
    CommonModule,
    SharedModule,
    BenefitsModalModule
  ],
  exports: [
    FeatureBenefitsComponent
  ],
  entryComponents: [
    BenefitsModalComponent
  ]
})
export class FeatureBenefitsModule { }
