import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustedbyComponent } from './trustedby.component';

import { SharedModule } from '../../shared/shared.module';
import { WorstmodalComponent } from './worstmodal/worstmodal.component';
import { KbhomeModalComponent } from './kbhome-modal/kbhome-modal.component';
import { TollModalComponent } from './toll-modal/toll-modal.component';
import { AlskaModalComponent } from './alska-modal/alska-modal.component';

@NgModule({
  declarations: [TrustedbyComponent, WorstmodalComponent, KbhomeModalComponent, TollModalComponent, AlskaModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TrustedbyComponent
  ],
  entryComponents: [
    WorstmodalComponent,
    KbhomeModalComponent,
    TollModalComponent,
    AlskaModalComponent
  ]
})
export class TrustedbyModule { }
