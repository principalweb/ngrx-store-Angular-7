import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignYourComponent } from './design-your.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DesignYourComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DesignYourComponent
  ]
})
export class DesignYourModule { }
