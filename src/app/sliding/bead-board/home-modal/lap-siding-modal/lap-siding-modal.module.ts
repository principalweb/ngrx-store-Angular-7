import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LapSidingModalComponent } from './lap-siding-modal.component';
import { LapTraditionalComponent } from './lap-traditional/lap-traditional.component';
import { LapSmoothComponent } from './lap-smooth/lap-smooth.component';

@NgModule({
  declarations: [LapSidingModalComponent, LapTraditionalComponent, LapSmoothComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LapSidingModalComponent
  ]
})
export class LapSidingModalModule { }
