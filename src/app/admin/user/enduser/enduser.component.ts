import { Component, OnInit, ViewChild } from '@angular/core';
import { AddEnduserService } from './add-enduser.service';
import { MatDialog, MatSort, MatPaginator, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { AddEnduserComponent } from './add-enduser/add-enduser.component';

@Component({
  selector: 'app-enduser',
  templateUrl: './enduser.component.html',
  styleUrls: ['./enduser.component.scss']
})
export class EnduserComponent implements OnInit {


  constructor(private service: AddEnduserService,
    private dialog: MatDialog
    ) { }



  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    searchKey: string;

  listData : MatTableDataSource<any>;
  displayColumns: string[] = ['address','contact','customer_id','email','group_name','locations','plant_name','user_type','username','Actions'];



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
     this.dialog.open(AddEnduserComponent, dialogConfig);


  }

  onEdit(row){
    console.log(row);
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddEnduserComponent, dialogConfig);
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
