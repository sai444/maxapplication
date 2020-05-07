import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ThingparametersService } from '../thingparameters.service';
import { ThingparametersComponent } from '../thingparameters.component';

@Component({
  selector: 'app-add-thingparameters',
  templateUrl: './add-thingparameters.component.html',
  styleUrls: ['./add-thingparameters.component.scss']
})
export class AddThingparametersComponent implements OnInit {


  constructor(private service:ThingparametersService,
    public dilogsref:MatDialogRef<ThingparametersComponent>,) { }

    allMeterdata;
    ngOnInit() {
      this.service.getStageData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);

    });

    }

  onSubmit(){
    if(this.service.StagesForm.valid){
      console.log(this.service.StagesForm.valid);
      this.ngOnInit();
       if(!this.service.StagesForm.get('_id').value){
        this.service.postuserdata(this.service.StagesForm.value);
        this.service.StagesForm.reset();
        this.service.initialzeFormGroup();
      } else  {
        this.service.updateUser(this.service.StagesForm.value);
      }
      // this.notification.openSnackBar('Party', 'act');
      // this.notification.success(':: Submitted successFully');

      this.onclose();
      // }
  }
  }
  onclose() {
    this.service.StagesForm.reset();
    this.service.initialzeFormGroup();
    this.dilogsref.close();
  }

  onClear(){
    this.service.StagesForm.reset();
    this.service.initialzeFormGroup();
  }

}
