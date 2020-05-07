import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ProcesschainService } from '../processchain.service';
import { ProcesschainComponent } from '../processchain.component';
@Component({
  selector: 'app-addprocesschain',
  templateUrl: './addprocesschain.component.html',
  styleUrls: ['./addprocesschain.component.scss']
})
export class AddprocesschainComponent implements OnInit {


  constructor(private service:ProcesschainService,
    public dilogsref:MatDialogRef<ProcesschainComponent>,private router: Router) { }

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
       if(!this.service.form.get('process_stage_id').value){
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
