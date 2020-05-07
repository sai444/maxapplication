import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';
import { AddStageparametersService } from '../add-stageparameters.service';
import { StageparametersComponent } from '../stageparameters.component';
import { Router } from '@angular/router';
import { StagesService } from '../../stages/stages.service';
@Component({
  selector: 'app-add-stageparameters',
  templateUrl: './add-stageparameters.component.html',
  styleUrls: ['./add-stageparameters.component.scss']
})
export class AddStageparametersComponent implements OnInit {


  constructor(private service:AddStageparametersService,
    public dilogsref:MatDialogRef<StageparametersComponent>,private router: Router,private stages: StagesService) { }
    stagesdata;
    allMeterdata;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);

    });
this.getstages()
    }
    getstages() {
      this.stages.getcategoryData().subscribe(res => {
        this.stagesdata = res;
      console.log('sekection for stage',this.stagesdata);
      });
    }

  onSubmit(){
    if(this.service.form.valid){
      console.log(this.service.form.valid);
      this.ngOnInit();
       if(!this.service.form.get('stage_param_id').value){
        this.service.postuserdata(this.service.form.value);
        this.service.form.reset();
        this.service.initialzeFormGroup();
        this.router.navigate(['/admin/config/pc'])
      } else  {
        this.service.updateUser(this.service.form.value);
        this.router.navigate(['/admin/config/pc'])
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
