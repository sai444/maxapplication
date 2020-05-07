import { Component, OnInit } from '@angular/core';


import { MatDialogRef } from '@angular/material';



import { RoleService } from '../role.service';
import { RoleComponent } from '../role.component';
import { DeptService } from '../../dept/dept.service';
@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.scss']
})
export class AddroleComponent implements OnInit {

depts;
  constructor(private service:RoleService,
    public dilogsref:MatDialogRef<RoleComponent>, private deptdata :DeptService) { }



      allMeterdata;
      ngOnInit() {
        this.service.getcategoryData().subscribe(res => {
          this.allMeterdata = res;
        console.log(this.allMeterdata);

      });
 this.getblocks();
      }
      getblocks() {
        this.deptdata.getcategoryData().subscribe(res => {
          this.depts = res;
        console.log(this.depts);
      });}

    onSubmit(){
      if(this.service.form.valid){
        console.log(this.service.form.valid);
        this.ngOnInit();
         if(!this.service.form.get('role_id').value){
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
