
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NotificationserviceService } from '../../user/notificationservice.service';

@Injectable({
  providedIn: 'root'
})
export class ThingseriesService {


  constructor(private http: HttpClient, private NotifyService: NotificationserviceService) { }

  form: FormGroup = new FormGroup({
    thing_series_id : new FormControl(null),
    thing_type : new FormControl('' , Validators.required),
    thing_series_name : new FormControl('' , Validators.required),

  });
  thefrominput;
  token =localStorage.getItem('tokenid')

  urls =localStorage.getItem('urls')

  // tslint:disable-next-line: member-ordering

  url= this.urls +'thing_series'
  url2 = this.urls+'thing_series/'+ this.thefrominput + '?token='  +this.token;
  initialzeFormGroup(){
    this.form.setValue({
      thing_series_id : null,
      thing_type : '',
      thing_series_name: ''
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
      this.url2 = this.urls+'thing_series/'+ this.thefrominput + '?token='  +this.token;
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
    this.thefrominput = userdata['thing_series_id'];
    this.url2 = this.urls+'thing_series/'+ this.thefrominput + '?token='  + this.token;
    // console.log("data in insert",user.videoType,user.MeterType,user.VedioLink,user.Details,user.Remark);

    this.http.put(this.url2, userdata).subscribe();
  }
}
