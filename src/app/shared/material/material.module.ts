import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 import {
  MatDialogModule,
	MatButtonModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
} from '@angular/material';

@NgModule({
  imports: [
		CommonModule,
    MatDialogModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
	],
	exports: [
    MatDialogModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule
	],
	declarations: []
})

export class MaterialModule { }