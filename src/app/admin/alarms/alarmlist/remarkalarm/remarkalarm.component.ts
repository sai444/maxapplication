import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RemarkalarmService } from '../remarkalarm.service';
import { AlarmlistComponent } from '../alarmlist.component';
@Component({
  selector: 'app-remarkalarm',
  templateUrl: './remarkalarm.component.html',
  styleUrls: ['./remarkalarm.component.scss']
})
export class RemarkalarmComponent implements OnInit {

  constructor(private service:RemarkalarmService,
    public dilogsref:MatDialogRef<AlarmlistComponent>,) { }

    allMeterdata;
    ngOnInit() {
      this.service.getempUserData().subscribe(res => {
        this.allMeterdata = res;
      console.log(this.allMeterdata);

    });

    }

  onSubmit(){
    if(this.service.empUserForm.valid){
      console.log(this.service.empUserForm.valid);
      this.ngOnInit();
       if(!this.service.empUserForm.get('_id').value){
        this.service.postuserdata(this.service.empUserForm.value);
        this.service.empUserForm.reset();
        this.service.initialzeFormGroup();
      } else  {
        this.service.updateUser(this.service.empUserForm.value);
      }
      // this.notification.openSnackBar('Party', 'act');
      // this.notification.success(':: Submitted successFully');

      this.onclose();
      // }
  }
  }
  onclose() {
    this.service.empUserForm.reset();
    this.service.initialzeFormGroup();
    this.dilogsref.close();
  }

  onClear(){
    this.service.empUserForm.reset();
    this.service.initialzeFormGroup();
  }


}
