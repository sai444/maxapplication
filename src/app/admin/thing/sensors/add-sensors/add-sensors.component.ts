import { Component, OnInit } from '@angular/core';


import { MatDialogRef } from '@angular/material';
import { SensorsService } from '../sensors.service';
import { SensorsComponent } from '../sensors.component';

@Component({
  selector: 'app-add-sensors',
  templateUrl: './add-sensors.component.html',
  styleUrls: ['./add-sensors.component.scss']
})
export class AddSensorsComponent implements OnInit {



  constructor(private service:SensorsService,
    public dilogsref:MatDialogRef<SensorsComponent>,) { }

    allMeterdata;
    ngOnInit() {
      this.service.getSensorThingData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);

    });

    }

  onSubmit(){
    if(this.service.SensorThingForm.valid){
      console.log(this.service.SensorThingForm.valid);
      this.ngOnInit();
       if(!this.service.SensorThingForm.get('_id').value){
        this.service.postuserdata(this.service.SensorThingForm.value);
        this.service.SensorThingForm.reset();
        this.service.initialzeFormGroup();
      } else  {
        this.service.updateUser(this.service.SensorThingForm.value);
      }
      // this.notification.openSnackBar('Party', 'act');
      // this.notification.success(':: Submitted successFully');

      this.onclose();
      // }
  }
  }
  onclose() {
    this.service.SensorThingForm.reset();
    this.service.initialzeFormGroup();
    this.dilogsref.close();
  }

  onClear(){
    this.service.SensorThingForm.reset();
    this.service.initialzeFormGroup();
  }


}
