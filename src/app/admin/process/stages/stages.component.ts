

import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { AddStagesComponent } from './add-stages/add-stages.component';
import { StagesService } from './stages.service';


@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {
  constructor(private service: StagesService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
displayColumns: string[] = ['stage_id','dept_name', 'plant_name', 'stage_details','stage_name','Actions'];



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
 this.dialog.open(AddStagesComponent, dialogConfig);


}

onEdit(row){
console.log(row);
this.service.populateForm(row);
const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
dialogConfig.width = "60%";
this.dialog.open(AddStagesComponent, dialogConfig);
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
