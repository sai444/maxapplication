import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { StagesComponent } from '../stages.component';
import { StagesService } from '../stages.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-stages',
  templateUrl: './add-stages.component.html',
  styleUrls: ['./add-stages.component.scss']
})
export class AddStagesComponent implements OnInit {

  constructor(private service:StagesService,
    public dilogsref:MatDialogRef<StagesComponent>,private http: HttpClient,) { }
dept ;
plant ;
url =  'http://122.166.167.113:5200';
    allMeterdata;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);

    });
    this.getdept();
    this.getplant();
    }

    getdept(){

      this.http.get(this.url + '/dept').subscribe(res => {
        this.dept = res;
      console.log('dept details',this.dept);

    });
  }
  getplant(){

    this.http.get(this.url + '/plant').subscribe(res => {
      this.plant = res;
    console.log('plant details',this.plant);

  });
}

  onSubmit(){
    if(this.service.form.valid){
      console.log(this.service.form.valid);
      this.ngOnInit();
       if(!this.service.form.get('stage_id').value){
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
