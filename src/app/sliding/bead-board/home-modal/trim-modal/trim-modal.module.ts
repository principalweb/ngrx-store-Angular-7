import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimModalComponent } from './trim-modal.component';
import { TrimTraditionalComponent } from './trim-traditional/trim-traditional.component';
import { TrimContemporaryComponent } from './trim-contemporary/trim-contemporary.component';

@NgModule({
  declarations: [TrimModalComponent, TrimTraditionalComponent, TrimContemporaryComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TrimModalComponent
  ]
})
export class TrimModalModule { }
