import { Component, OnInit, ViewChild } from '@angular/core';

import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';





import { ThingparametersService } from './thingparameters.service';
import { AddThingparametersComponent } from './add-thingparameters/add-thingparameters.component';
@Component({
  selector: 'app-thingparameters',
  templateUrl: './thingparameters.component.html',
  styleUrls: ['./thingparameters.component.scss']
})
export class ThingparametersComponent implements OnInit {


  constructor(private service: ThingparametersService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
displayColumns: string[] = ['_id','MeterSeries', 'Parameter', 'Details','Type','Units','Actions'];



  alldata;
  urls;

  ngOnInit() {
    this.service.getStageData().subscribe(res => {
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
   this.dialog.open(AddThingparametersComponent, dialogConfig);


}

onEdit(row){
  console.log(row);
  this.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddThingparametersComponent, dialogConfig);
}

onDelete(data){
  this.service.deletedata(data);
  console.log('in comp',data);
}


populateForm(row){
  this.service.StagesForm.setValue(row);
}


}
