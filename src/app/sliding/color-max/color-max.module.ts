import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorMaxComponent } from './color-max.component';

import { SharedModule } from '../../shared/shared.module';
import { ColorMaxModalComponent } from './color-max-modal/color-max-modal.component';

@NgModule({
  declarations: [ColorMaxComponent, ColorMaxModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ColorMaxComponent
  ],
  entryComponents: [
    ColorMaxModalComponent
  ]
})
export class ColorMaxModule { }
