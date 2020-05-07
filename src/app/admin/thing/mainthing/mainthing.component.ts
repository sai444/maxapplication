import { Component, OnInit, ViewChild } from '@angular/core';

import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { MainthingService } from './mainthing.service';
import { AddMainthingComponent } from './add-mainthing/add-mainthing.component';



@Component({
  selector: 'app-mainthing',
  templateUrl: './mainthing.component.html',
  styleUrls: ['./mainthing.component.scss']
})
export class MainthingComponent implements OnInit {


  constructor(private service: MainthingService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
// tslint:disable-next-line: max-line-length
displayColumns: string[] = ['_id','meterName', 'Plant', 'CustomerID','Department','InstallationDate','Sensor', 'Address', 'MeterSerialNo','Actions'];



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
   this.dialog.open(AddMainthingComponent, dialogConfig);


}

onEdit(row){
  console.log(row);
  this.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddMainthingComponent, dialogConfig);
}

onDelete(data){
  this.service.deletedata(data);
  console.log('in comp',data);
}


populateForm(row){
  this.service.StagesForm.setValue(row);
}

}
