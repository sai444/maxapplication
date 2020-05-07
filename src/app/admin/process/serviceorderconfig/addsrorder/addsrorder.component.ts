import { Component, OnInit } from '@angular/core';


import { MatDialogRef } from '@angular/material';
import { SerorderService } from '../serorder.service';
import { ServiceOrderComponent } from 'src/app/admin/service-order/service-order.component';

@Component({
  selector: 'app-addsrorder',
  templateUrl: './addsrorder.component.html',
  styleUrls: ['./addsrorder.component.scss']
})
export class AddsrorderComponent implements OnInit {

  constructor(private service:SerorderService,
    public dilogsref:MatDialogRef<ServiceOrderComponent>,) { }

    allMeterdata;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);

    });

    }

  onSubmit(){
    if(this.service.form.valid){
      console.log(this.service.form.valid);
      this.ngOnInit();
       if(!this.service.form.get('category_id').value){
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
