
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { FormGroup, FormControl, Validators } from '@angular/forms';

  import { NotificationserviceService } from '../../user/notificationservice.service';

  @Injectable({
    providedIn: 'root'
  })
  export class AddThingtemplateService {


    constructor(private http: HttpClient, private NotifyService: NotificationserviceService) { }

    form: FormGroup = new FormGroup({
      thing_series_name : new FormControl('' , Validators.required),
      thing_details: new FormControl('' , Validators.required),
      thing_dims: new FormControl('' , Validators.required),
      thing_pdf_link: new FormControl('' , Validators.required),
      thing_template_id: new FormControl(null),
      thing_video_link: new FormControl('' , Validators.required),
    });
    thefrominput;
    token =localStorage.getItem('tokenid')

    urls =localStorage.getItem('urls')

    // tslint:disable-next-line: member-ordering

    url= this.urls +'thing_template'
    url2 = this.urls+'thing_template/'+ this.thefrominput + '?token='  +this.token;
    initialzeFormGroup(){
      this.form.setValue({
        thing_details: '' ,
    thing_dims: '' ,
    thing_pdf_link: '' ,
    thing_series_name: '' ,
    thing_template_id: null ,
    thing_video_link: ''
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
        this.url2 = this.urls+'thing_template/'+ this.thefrominput + '?token='  +this.token;
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
      this.thefrominput = userdata['thing_template_id'];
      this.url2 = this.urls+'thing_template/'+ this.thefrominput + '?token='  + this.token;
      // console.log("data in insert",user.videoType,user.MeterType,user.VedioLink,user.Details,user.Remark);

      this.http.put(this.url2, userdata).subscribe();
    }
  }
