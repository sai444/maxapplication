import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { DeptService } from '../dept.service';
import { DeptComponent } from '../dept.component';
import { BlockService } from '../../block/block.service';

@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.scss']
})
export class AdddeptComponent implements OnInit {


  blocks;


constructor(private service:DeptService,
  public dilogsref:MatDialogRef<DeptComponent>,private blockdata: BlockService) { }

  allMeterdata;
  ngOnInit() {
    this.service.getcategoryData().subscribe(res => {
      this.allMeterdata = res;
    console.log(this.allMeterdata);

  });
  this.getblocks();
  }
  getblocks(){
    this.blockdata.getcategoryData().subscribe(res => {
      this.blocks = res;
    console.log(this.blocks);
  });
  }

  onSubmit(){
    if(this.service.form.valid){
      console.log(this.service.form.valid);
      this.ngOnInit();
       if(!this.service.form.get('dept_id').value){
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
