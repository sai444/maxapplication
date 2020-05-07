import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { NotifialarmService } from './notifialarm.service';

@Injectable({
  providedIn: 'root'
})
export class RemarkalarmService {
// tslint:disable-next-line: no-shadowed-variable
constructor(private http: HttpClient, private NotifyService: NotifialarmService) { }

empUserForm: FormGroup = new FormGroup({
  _id : new FormControl(null),
  Process : new FormControl(''),
  Status: new FormControl(''),
  Thing: new FormControl(''),
  action: new FormControl(''),
  alarmDetails: new FormControl(''),
  alarmRemark: new FormControl(''),
  severity: new FormControl(''),
  timedate: new FormControl(''),


});
thefrominput;
token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoic2FzaWt1bWFyc3NzcyIsImV4cCI6MTU4ODE5MzA0N30.xtLKE8ex5hyPbEYW6DxYmb6EmNrkOi37BAayPrhj-GE';
url= 'http://localhost:1919/Alarms?token='+ this.token;
url2 = 'http://localhost:1919/Alarms/'+ this.thefrominput + '?token='  +this.token;
initialzeFormGroup(){
  this.empUserForm.setValue({
    _id : null,
    Process : '',
    Status: '',
    Thing: '',
    action: '',
    alarmDetails: '',
    alarmRemark: '',
    severity: '',
    timedate: '',

  });

}

populateForm(row){
  this.empUserForm.setValue(row);
}

getempUserData(){
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
    this.url2 = 'http://localhost:1919/Alarms/'+ this.thefrominput + '?token='  +this.token;
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
  this.thefrominput = userdata['_id'];

  this.url2 = 'http://localhost:1919/Alarms/'+ this.thefrominput + '?token='  + this.token;
  this.http.put(this.url2, userdata).subscribe();
}
}
