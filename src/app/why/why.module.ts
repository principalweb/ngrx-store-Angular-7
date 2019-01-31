import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyRoutingModule } from './why-routing.module';
import { WhyComponent } from './why.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WhyComponent],
  imports: [
    CommonModule,
    WhyRoutingModule,
    SharedModule
  ]
})
export class WhyModule { }
