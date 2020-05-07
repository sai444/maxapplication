import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationserviceService } from '../../user/notificationservice.service';


@Injectable({
  providedIn: 'root'
})
export class SensorsService {
// tslint:disable-next-line: no-shadowed-variable
constructor(private http: HttpClient, private NotifyService: NotificationserviceService) { }

SensorThingForm: FormGroup = new FormGroup({
  _id : new FormControl(null),
  Sensor : new FormControl('' , Validators.required),
  Details: new FormControl(''),
  CalibartionFrq: new FormControl(''),

  ConnDate  : new FormControl(''),
  CustomerID: new FormControl('' , Validators.required),
  timedate : new FormControl(''),

});
thefrominput;
token =localStorage.getItem('tokenid')
url= 'http://localhost:1919/SensorThing?token='+ this.token;
url2 = 'http://localhost:1919/SensorThing/'+ this.thefrominput + '?token='  +this.token;
initialzeFormGroup(){
  this.SensorThingForm.setValue({
    _id : null,
    Sensor : '',
    Details: '',
    CalibartionFrq: '',
    ConnDate: '',
    CustomerID: '',
    timedate : ''
  });

}

populateForm(row){
  this.SensorThingForm.setValue(row);
}

getSensorThingData(){
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
    this.url2 = 'http://localhost:1919/SensorThing/'+ this.thefrominput + '?token='  +this.token;
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
  this.url2 = 'http://localhost:1919/SensorThing/'+ this.thefrominput + '?token='  + this.token;
  // console.log("data in insert",user.videoType,user.MeterType,user.VedioLink,user.Details,user.Remark);

  this.http.put(this.url2, userdata).subscribe();
}

}
