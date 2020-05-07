import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationserviceService } from '../../user/notificationservice.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  constructor(private http: HttpClient, private NotifyService: NotificationserviceService) { }

  form: FormGroup = new FormGroup({
    comp_id : new FormControl(null),
    comp_name: new FormControl('' , Validators.required),
    comp_lat: new FormControl(''),

    comp_long  : new FormControl(''),
    comp_logo: new FormControl('' , Validators.required),
    comp_details : new FormControl(''),
    comp_addr : new FormControl(''),
  });
  thefrominput;
  token =localStorage.getItem('tokenid')

  urls =localStorage.getItem('urls')

  // tslint:disable-next-line: member-ordering

  url= this.urls +'company'
  url2 = this.urls+'company/'+ this.thefrominput + '?token='  +this.token;
  initialzeFormGroup(){
    this.form.setValue({
      comp_id : null,
      comp_name : '',
      comp_lat: '',
      comp_long: '',
      comp_logo: '',
      comp_details: '',
      comp_addr: '',
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
      this.url2 = this.urls+'company/'+ this.thefrominput ;
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
    this.thefrominput = userdata['comp_id'];
    this.url2 = this.urls+'company/'+ this.thefrominput + '?token='  + this.token;
    // console.log("data in insert",user.videoType,user.MeterType,user.VedioLink,user.Details,user.Remark);

    this.http.put(this.url2, userdata).subscribe();
  }
}
