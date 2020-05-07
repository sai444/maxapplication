import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { BlockService } from '../block.service';
import { BlockComponent } from '../block.component';
import { PlantserviceService } from '../../plant/plantservice.service';
@Component({
  selector: 'app-addblock',
  templateUrl: './addblock.component.html',
  styleUrls: ['./addblock.component.scss']
})
export class AddblockComponent implements OnInit {

  plants;
  constructor(private service:BlockService,
    public dilogsref:MatDialogRef<BlockComponent>, private plantsdata:PlantserviceService) { }



      allMeterdata;
      ngOnInit() {
        this.service.getcategoryData().subscribe(res => {
          this.allMeterdata = res;
        console.log(this.allMeterdata);

      });
this.getplants();
      }
getplants(){
  this.plantsdata.getcategoryData().subscribe(res => {
    this.plants = res;
  console.log(this.plants);

});



}
    onSubmit(){
      if(this.service.form.valid){
        console.log(this.service.form.valid);
        this.ngOnInit();
         if(!this.service.form.get('block_id').value){
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
