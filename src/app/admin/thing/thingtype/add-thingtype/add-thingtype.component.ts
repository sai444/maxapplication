import { Component, OnInit } from '@angular/core';
import { ThingtypeService } from '../thingtype.service';
import { MatDialogRef } from '@angular/material';
import { ThingtypeComponent } from '../thingtype.component';

@Component({
  selector: 'app-add-thingtype',
  templateUrl: './add-thingtype.component.html',
  styleUrls: ['./add-thingtype.component.scss']
})
export class AddThingtypeComponent implements OnInit {
  constructor(private service:ThingtypeService,
    public dilogsref:MatDialogRef<ThingtypeComponent>,) { }

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
       if(!this.service.form.get('thing_id').value){
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
