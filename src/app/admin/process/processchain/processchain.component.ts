import { Component, OnInit, ViewChild } from '@angular/core';

import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';

import { ProcesschainService } from './processchain.service';
import { AddprocesschainComponent } from './addprocesschain/addprocesschain.component';


@Component({
  selector: 'app-processchain',
  templateUrl: './processchain.component.html',
  styleUrls: ['./processchain.component.scss']
})
export class ProcesschainComponent implements OnInit {


  constructor(private service: ProcesschainService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
displayColumns: string[] = ['process_stage_id', 'process_name', 'stage_name','stage_number','Actions'];



  alldata;
  urls;

  ngOnInit() {
    this.service.getcategoryData() .subscribe(res => {
      this.alldata = res;
    console.log(this.alldata);

this.listData = new MatTableDataSource(this.alldata);
this.listData.sort =this.sort;
this.listData.paginator =this.paginator;
  });

}

onSearchClear(){
  this.searchKey ='';
  this.applyFilter();

}
applyFilter(){
  console.log()
this.listData.filter = this.searchKey.trim().toLowerCase();

}


onCreate(){
  console.log("create clicked");
  //  this.services.populateForm(row);
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = true;
   dialogConfig.autoFocus = true;
   dialogConfig.width = '60%';
   this.dialog.open(AddprocesschainComponent, dialogConfig);


}

onEdit(row){
  console.log(row);
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddprocesschainComponent, dialogConfig);
}

onDelete(data){
  this.service.deletedata(data);
  console.log('in comp',data);
}
populateForm(row){
  console.log('sensor edit',row);

  this.service.form.setValue(row);
}
}
