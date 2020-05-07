
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
  import { FormGroup, FormControl, Validators } from '@angular/forms';
  import { NotificationserviceService } from '../notificationservice.service';
  @Injectable({
    providedIn: 'root'
  })
  export class AddSysuserService {
    constructor(private http: HttpClient, private NotifyService: NotificationserviceService) { }

    form: FormGroup = new FormGroup({
      emp_id : new FormControl(null),
      dept_name: new FormControl('' , Validators.required),
      email_id: new FormControl('' , Validators.required),
      emp_addr: new FormControl('' , Validators.required),
      emp_comp_id: new FormControl('' , Validators.required),
      emp_contact: new FormControl('' , Validators.required),
      emp_details:new FormControl('' , Validators.required),

      emp_name: new FormControl('' , Validators.required),
      emp_username: new FormControl('' , Validators.required),
      isactive: new FormControl('' , Validators.required),
      plant_name: new FormControl('' , Validators.required),
      role_name: new FormControl('' , Validators.required),
      emp_password:new FormControl('' , Validators.required),


    });
    thefrominput;
    token =localStorage.getItem('tokenid')
    urls =localStorage.getItem('urls')
    // tslint:disable-next-line: member-ordering

    url= this.urls +'emp'
    url2 = this.urls+'emp/'+ this.thefrominput + '?token='  +this.token;
    initialzeFormGroup(){
      this.form.setValue({
        emp_id:null,
        dept_name: '',
    email_id: '',
    emp_addr: '',
    emp_comp_id: '',
    emp_contact: '',
    emp_details: '',

    emp_name: '',
    emp_username: '',
    isactive: '',
    plant_name: '',
    role_name: '',
    emp_password: '',
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
        this.url2 = this.urls+'emp/'+ this.thefrominput ;
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
      this.thefrominput = userdata['emp_id'];
      this.url2 = this.urls+'emp/'+ this.thefrominput + '?token='  + this.token;
      // console.log("data in insert",user.videoType,user.MeterType,user.VedioLink,user.Details,user.Remark);

      this.http.put(this.url2, userdata).subscribe();
    }
  }
