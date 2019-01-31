import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { TOP_BUILDERS } from '../../../shared/consts/topbuilder.const';
import { TopBuilder } from '../../../shared/models';

@Component({
  selector: 'app-kbhome-modal',
  templateUrl: './kbhome-modal.component.html',
  styleUrls: ['./kbhome-modal.component.styl']
})
export class KbhomeModalComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'prevrank', 'company', 'total', 'gross'];
  
  dataSource = new MatTableDataSource<TopBuilder>(TOP_BUILDERS);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialogRef: MatDialogRef<KbhomeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
   
  }

  onNoClick() {
    this.dialogRef.close()
  }
}
