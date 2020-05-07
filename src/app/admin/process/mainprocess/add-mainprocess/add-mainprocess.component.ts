import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { AddMainprocessService } from '../add-mainprocess.service';
import { MainprocessComponent } from '../mainprocess.component';

@Component({
  selector: 'app-add-mainprocess',
  templateUrl: './add-mainprocess.component.html',
  styleUrls: ['./add-mainprocess.component.scss']
})
export class AddMainprocessComponent implements OnInit {


  constructor(private service:AddMainprocessService,
    public dilogsref:MatDialogRef<MainprocessComponent>,private router: Router) { }

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
       if(!this.service.form.get('process_id').value){
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
