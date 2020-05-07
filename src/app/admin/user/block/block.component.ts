
import { Component, OnInit, ViewChild } from '@angular/core';
import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { BlockService } from './block.service';
import { AddblockComponent } from './addblock/addblock.component';
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  constructor(private service: BlockService,
    private dialog: MatDialog
    ) { }



  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    searchKey: string;

  listData : MatTableDataSource<any>;
  displayColumns: string[] = ['block_id', 'block_addr','block_details','block_lat','block_long','block_name','plant_name','Actions'];



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
     this.dialog.open(AddblockComponent, dialogConfig);


  }

  onEdit(row){
    console.log(row);
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddblockComponent, dialogConfig);
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
