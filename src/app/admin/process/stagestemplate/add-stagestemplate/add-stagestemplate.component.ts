import { Component, OnInit } from '@angular/core';
import { StagestemplateService } from '../stagestemplate.service';
import { StagestemplateComponent } from '../stagestemplate.component';
import { MatDialogRef } from '@angular/material';
import { StagesService } from '../../stages/stages.service';
@Component({
  selector: 'app-add-stagestemplate',
  templateUrl: './add-stagestemplate.component.html',
  styleUrls: ['./add-stagestemplate.component.scss']
})
export class AddStagestemplateComponent implements OnInit {


  constructor(private service:StagestemplateService,
    public dilogsref:MatDialogRef<StagestemplateComponent>,private stages: StagesService) { }
stagesdata;

    allMeterdata;
    ngOnInit() {
      this.service.getcategoryData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);



    });

    this.getstages();
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
       if(!this.service.form.get('stage_template_id').value){
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
