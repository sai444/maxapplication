

import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';



import { AddThingtemplateService } from './add-thingtemplate.service';
import { AddThingtemplateComponent } from './add-thingtemplate/add-thingtemplate.component';

@Component({
  selector: 'app-thing-template',
  templateUrl: './thing-template.component.html',
  styleUrls: ['./thing-template.component.scss']
})
export class ThingTemplateComponent implements OnInit {


  constructor(private service: AddThingtemplateService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
displayColumns: string[] = [ 'thing_details','thing_dims','thing_pdf_link','thing_series_name','thing_template_id','thing_video_link' ,'Actions'];



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
   this.dialog.open(AddThingtemplateComponent, dialogConfig);


}

onEdit(row){
  console.log(row);
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(AddThingtemplateComponent, dialogConfig);
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
