import { Component, OnInit, ViewChild } from '@angular/core';

import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';

import { AddStageparametersService } from './add-stageparameters.service';
import { AddStageparametersComponent } from './add-stageparameters/add-stageparameters.component';
@Component({
  selector: 'app-stageparameters',
  templateUrl: './stageparameters.component.html',
  styleUrls: ['./stageparameters.component.scss']
})
export class StageparametersComponent implements OnInit {


  constructor(private service: AddStageparametersService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
displayColumns: string[] = ['stage_name', 'stage_param_details', 'stage_param_id','stage_param_name','stage_param_type','stage_param_units','stage_params','Actions'];



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
   this.dialog.open(AddStageparametersComponent, dialogConfig);


}

onEdit(row){
  console.log(row);
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddStageparametersComponent, dialogConfig);
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
