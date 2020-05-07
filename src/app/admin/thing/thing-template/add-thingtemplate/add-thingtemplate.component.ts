import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AddThingtemplateService } from '../add-thingtemplate.service';
import { ThingTemplateComponent } from '../thing-template.component';
import { ThingseriesService } from '../../thing-series/thingseries.service';

@Component({
  selector: 'app-add-thingtemplate',
  templateUrl: './add-thingtemplate.component.html',
  styleUrls: ['./add-thingtemplate.component.scss']
})
export class AddThingtemplateComponent implements OnInit {


  series;
  constructor(private service:AddThingtemplateService,
    public dilogsref:MatDialogRef<ThingTemplateComponent>, private thingseries :ThingseriesService) { }

    allMeterdata;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);
    });

    this.gettype()
    }


    gettype(){

      this.thingseries.getcategoryData().subscribe(res => {
        this.series = res;
      console.log(this.series);
    });
    }


  onSubmit(){
    if(this.service.form.valid){
      console.log(this.service.form.valid);
      this.ngOnInit();
       if(!this.service.form.get('thing_template_id').value){
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
