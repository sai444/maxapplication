
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationserviceService } from '../../user/notificationservice.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcesschainService {


constructor(private http: HttpClient, private NotifyService: NotificationserviceService) { }

  form: FormGroup = new FormGroup({
    process_stage_id : new FormControl(null),
    process_name : new FormControl('' , Validators.required),
    stage_name: new FormControl(''),
    stage_number: new FormControl(''),

  });
  thefrominput;
  token =localStorage.getItem('tokenid')

  urls =localStorage.getItem('urls')

  // tslint:disable-next-line: member-ordering

  url= this.urls +'process_stage'
  url2 = this.urls+'process_stage/'+ this.thefrominput + '?token='  +this.token;
  initialzeFormGroup(){
    this.form.setValue({
      process_stage_id : null,
      process_name : '',
      stage_name: '',
      stage_number: '',

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
  }

  deletedata(deleteid){
    this.thefrominput = deleteid;
    if(confirm('Are you sure to delete this record ?')){
      // console.log(id);
      this.url2 = this.urls+'process_stage/'+ this.thefrominput + '?token='  +this.token;
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
    this.thefrominput = userdata['process_stage_id'];
    this.url2 = this.urls+'process_stage/'+ this.thefrominput + '?token='  + this.token;
    // console.log("data in insert",user.videoType,user.MeterType,user.VedioLink,user.Details,user.Remark);

    this.http.put(this.url2, userdata).subscribe();
  }
}
