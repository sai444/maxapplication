
import { Component, OnInit, ViewChild } from '@angular/core';

import {  MatSort, MatPaginator, MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';


import { PlantserviceService } from './plantservice.service';
import { AddPlantComponent } from './add-plant/add-plant.component';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  constructor(private service: PlantserviceService,
    private dialog: MatDialog
    ) { }



  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    searchKey: string;

  listData : MatTableDataSource<any>;
  displayColumns: string[] = ['plant_id', 'plant_name', 'plant_addr','comp_name','plant_details','plant_lat','plant_long','Actions'];



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
     this.dialog.open(AddPlantComponent, dialogConfig);


  }

  onEdit(row){
    console.log(row);
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddPlantComponent, dialogConfig);
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
