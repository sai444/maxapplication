import { Component, OnInit } from '@angular/core';


import { MatDialogRef } from '@angular/material';

import { ThingseriesService } from '../thingseries.service';
import { ThingSeriesComponent } from '../thing-series.component';
import { ThingtypeService } from '../../thingtype/thingtype.service';

@Component({
  selector: 'app-add-thingseries',
  templateUrl: './add-thingseries.component.html',
  styleUrls: ['./add-thingseries.component.scss']
})
export class AddThingseriesComponent implements OnInit {
types;
  constructor(private service:ThingseriesService,
    public dilogsref:MatDialogRef<ThingSeriesComponent>, private thingtypes :ThingtypeService) { }

    allMeterdata;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);
    });

    this.gettype()
    }


    gettype(){

      this.thingtypes.getcategoryData().subscribe(res => {
        this.types = res;
      console.log(this.types);
    });
    }


  onSubmit(){
    if(this.service.form.valid){
      console.log(this.service.form.valid);
      this.ngOnInit();
       if(!this.service.form.get('thing_series_id').value){
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
