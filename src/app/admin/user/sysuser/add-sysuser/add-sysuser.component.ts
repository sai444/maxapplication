import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { PlantserviceService } from '../../plant/plantservice.service';
import { SysuserComponent } from '../sysuser.component';
import { AddSysuserService } from '../add-sysuser.service';
import { RoleService } from '../../role/role.service';
import { DeptService } from '../../dept/dept.service';
@Component({
  selector: 'app-add-sysuser',
  templateUrl: './add-sysuser.component.html',
  styleUrls: ['./add-sysuser.component.scss']
})
export class AddSysuserComponent implements OnInit {

  plants;
  roles;
  depts;
  constructor(private service:AddSysuserService,
    public dilogsref:MatDialogRef<SysuserComponent>, private plantsdata: PlantserviceService , private deptsdata : DeptService, private rolesdata : RoleService)  { }

    allMeterdata;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata)
    });
    this.getplants();
    this.getrolesdata();
    this. getdeptsdata();
    }

    getplants(){
      this.plantsdata.getcategoryData().subscribe(res => {
        this.plants = res;
      console.log(this.plants);

    });}

    getrolesdata(){
      this.rolesdata.getcategoryData().subscribe(res => {
        this.roles = res;
      console.log(this.roles);

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
