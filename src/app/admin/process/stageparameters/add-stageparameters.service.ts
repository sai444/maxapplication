import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NotificationserviceService } from '../../user/notificationservice.service';
@Injectable({
  providedIn: 'root'
})
export class AddStageparametersService {

  constructor(private http: HttpClient, private NotifyService: NotificationserviceService) { }

  form: FormGroup = new FormGroup({
    stage_param_id : new FormControl(null),
    stage_name : new FormControl('' , Validators.required),
    stage_param_details: new FormControl(''),
    stage_param_name: new FormControl(''),

    stage_param_type  : new FormControl(''),
    stage_param_units: new FormControl(''),

    stage_params  : new FormControl(''),
  });
  thefrominput;
  token =localStorage.getItem('tokenid')

  urls =localStorage.getItem('urls')

  // tslint:disable-next-line: member-ordering

  url= this.urls +'stageparam'
  url2 = this.urls+'stageparam/'+ this.thefrominput + '?token='  +this.token;
  initialzeFormGroup(){
    this.form.setValue({
      stage_params : null,
      stage_param_units : '',
      stage_param_type: '',
      stage_param_name: '',
      stage_param_id: '',
      stage_param_details: '',
      stage_name: '',

    });

  }

  populateForm(row){
    this.form.setValue(row);
  }

  getcategoryData(){
    console.log(this.http.get(this.url));
    return this.http.get(this.url);

  }

  postuserdata(data){
    console.log("post data", data);
    this.http.post(this.url, data).subscribe();
    Swal.fire(
      'success !',
      'You clicked the button!',
      'success'
    )
  }

  deletedata(deleteid){
    this.thefrominput = deleteid;
    if(confirm('Are you sure to delete this record ?')){
      // console.log(id);
      this.url2 = this.urls+'stageparam/'+ this.thefrominput + '?token='  +this.token;
    console.log("delete",deleteid);
    this.http.delete(this.url2).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
    this.NotifyService.warn('::deleted successfully');
        }

    // this.notificationservice.warn('::deleted successfully');
  }

  updateUser(userdata) {
    console.log('data in update', userdata);
    this.thefrominput = userdata['stage_param_id'];
    this.url2 = this.urls+'stageparam/'+ this.thefrominput + '?token='  + this.token;
    // console.log("data in insert",user.videoType,user.MeterType,user.VedioLink,user.Details,user.Remark);

    this.http.put(this.url2, userdata).subscribe();
  }
}
