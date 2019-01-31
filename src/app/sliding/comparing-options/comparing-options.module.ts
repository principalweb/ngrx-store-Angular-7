import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComparingOptionsComponent } from './comparing-options.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ComparingOptionsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ComparingOptionsComponent
  ]
})
export class ComparingOptionsModule { }
