import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { AddEnduserService } from '../add-enduser.service';
import { EnduserComponent } from '../enduser.component';
import { PlantserviceService } from '../../plant/plantservice.service';
import { DeptService } from '../../dept/dept.service';

@Component({
  selector: 'app-add-enduser',
  templateUrl: './add-enduser.component.html',
  styleUrls: ['./add-enduser.component.scss']
})
export class AddEnduserComponent implements OnInit {
  constructor(private service:AddEnduserService,
    public dilogsref:MatDialogRef<EnduserComponent>, private plantsdata: PlantserviceService, private deptsdata : DeptService,) { }
  plants;

    allMeterdata;
    depts;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata)
    });
    this.getplants();
    this.getdeptsdata();
    }

    getplants(){
      this.plantsdata.getcategoryData().subscribe(res => {
        this.plants = res;
      console.log(this.plants);

    });}
    getdeptsdata(){
      this.deptsdata.getcategoryData().subscribe(res => {
        this.depts = res;
      console.log(this.depts);

    });}

  onSubmit(){
    if(this.service.form.valid){
      console.log(this.service.form.valid);
      this.ngOnInit();
       if(!this.service.form.get('emp_id').value){
        this.service.postuserdata(this.service.form.value);
        this.service.form.reset();
        this.service.initialzeFormGroup();
      } else  {
        this.service.updateUser(this.service.form.value);
      }
      // this.notification.openSnackBar('Party', 'act');
      // this.notification.success(':: Submitted successFully');

      this.onclose();
      // }
  }
  }
  onclose() {
    this.service.form.reset();
    this.service.initialzeFormGroup();
    this.dilogsref.close();
  }

  onClear(){
    this.service.form.reset();
    this.service.initialzeFormGroup();
  }
}
