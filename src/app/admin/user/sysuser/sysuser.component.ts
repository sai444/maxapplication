import { Component, OnInit, ViewChild } from '@angular/core';


import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { AddSysuserComponent } from './add-sysuser/add-sysuser.component';
import { AddSysuserService } from './add-sysuser.service';

@Component({
  selector: 'app-sysuser',
  templateUrl: './sysuser.component.html',
  styleUrls: ['./sysuser.component.scss']
})
export class SysuserComponent implements OnInit {


  constructor(private service: AddSysuserService,
    private dialog: MatDialog
    ) { }



  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    searchKey: string;

  listData : MatTableDataSource<any>;
  displayColumns: string[] = [ 'emp_id','dept_name','email_id','emp_addr','emp_comp_id','emp_contact','emp_details','emp_name','emp_username','isactive','plant_name','role_name','Actions'];



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
     this.dialog.open(AddSysuserComponent, dialogConfig);


  }

  onEdit(row){
    console.log(row);
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddSysuserComponent, dialogConfig);
  }

  onDelete(data){
    console.log('in delete',data);
    this.service.deletedata(data);

  }
  populateForm(row){
    console.log('sensor edit',row);

    this.service.form.setValue(row);
  }

}
