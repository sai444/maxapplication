import { Component, OnInit, ViewChild } from '@angular/core';
import { RemarkalarmService } from './remarkalarm.service';
import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { RemarkalarmComponent } from './remarkalarm/remarkalarm.component';
@Component({
  selector: 'app-alarmlist',
  templateUrl: './alarmlist.component.html',
  styleUrls: ['./alarmlist.component.scss']
})
export class AlarmlistComponent implements OnInit {
  constructor(private service: RemarkalarmService,
    private dialog: MatDialog
    ) { }


@ViewChild(MatSort) sort: MatSort;
@ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

listData : MatTableDataSource<any>;
displayColumns: string[] = ['_id', 'Process', 'Status','Thing','action','alarmDetails','alarmRemark','severity','timedate','Actions'];



  alldata;
  urls;

  ngOnInit() {
    this.service.getempUserData() .subscribe(res => {
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
   this.dialog.open(RemarkalarmComponent, dialogConfig);


}

onEdit(row){
  console.log(row);
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(RemarkalarmComponent, dialogConfig);
}

onDelete(data){
  this.service.deletedata(data);
  console.log('in comp',data);
}

}
