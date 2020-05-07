import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MainthingComponent } from '../mainthing.component';
import { MainthingService } from '../mainthing.service';


@Component({
  selector: 'app-add-mainthing',
  templateUrl: './add-mainthing.component.html',
  styleUrls: ['./add-mainthing.component.scss']
})
export class AddMainthingComponent implements OnInit {


  constructor(private service:MainthingService,
    public dilogsref:MatDialogRef<MainthingComponent>,) { }

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
