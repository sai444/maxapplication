import { Component, OnInit } from '@angular/core';


import { MatDialogRef } from '@angular/material';



import { PlantComponent } from '../plant.component';
import { PlantserviceService } from '../plantservice.service';
import { CompanyService } from '../../company/company.service';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {

  comps;
  constructor(private service:PlantserviceService,
    public dilogsref:MatDialogRef<PlantComponent>,private compsdata :CompanyService) { }



      allMeterdata;
      ngOnInit() {
        this.service.getcategoryData().subscribe(res => {
          this.allMeterdata = res;
        console.log(this.allMeterdata);

      });
this.getcomp();
      }
getcomp(){
  this.compsdata.getcategoryData().subscribe(res => {
    this.comps = res;
  console.log(this.comps);

});

}


    onSubmit(){
      if(this.service.form.valid){
        console.log(this.service.form.valid);
        this.ngOnInit();
         if(!this.service.form.get('plant_id').value){
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
