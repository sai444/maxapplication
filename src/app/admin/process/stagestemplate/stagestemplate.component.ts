import { Component, OnInit, ViewChild } from '@angular/core';

import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';

import { StagestemplateService } from './stagestemplate.service';
import { AddStagestemplateComponent } from './add-stagestemplate/add-stagestemplate.component';


@Component({
  selector: 'app-stagestemplate',
  templateUrl: './stagestemplate.component.html',
  styleUrls: ['./stagestemplate.component.scss']
})
export class StagestemplateComponent implements OnInit {

  constructor(private service: StagestemplateService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
displayColumns: string[] = ['stage_template_id', 'template_details', 'template_name','stage_name','production','process_time','input_time','Actions'];



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
   this.dialog.open(AddStagestemplateComponent, dialogConfig);


}

onEdit(row){
  console.log(row);
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddStagestemplateComponent, dialogConfig);
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
