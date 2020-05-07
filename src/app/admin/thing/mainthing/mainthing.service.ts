import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationserviceService } from '../../user/notificationservice.service';

@Injectable({
  providedIn: 'root'
})
export class MainthingService {

  constructor(private http: HttpClient, public NotifyserviceService: NotificationserviceService) { }

  StagesForm: FormGroup = new FormGroup({
    _id : new FormControl(null),
    meterName : new FormControl('',Validators.required),
    CustomerID: new FormControl(''),
    Department: new FormControl(''),
    Plant: new FormControl(''),
    InstallationDate : new FormControl(''),
    Sensor : new FormControl(''),
    Address: new FormControl(''),
    MeterSerialNo: new FormControl(''),



  });
  thefrominput;
  token =localStorage.getItem('tokenid')
  url = 'http://localhost:2020/ThingMeter?token='+ this.token;
  url2 = 'http://localhost:2020/ThingMeter/'+ this.thefrominput + '?token='  +this.token;
  initialzeFormGroup(){
    this.StagesForm.setValue({
      _id : null,
      meterName:'' ,
      CustomerID:'',
      Departmant:'' ,
      Plant:'',
      InstallationDate:'' ,
      Sensor:'',
      Address:'',
      MeterSerialNo:'',
      Department:''
    });

  }

  getStageData(){
    console.log('get data', this.http.get(this.url));
    return this.http.get(this.url);
  }

  postuserdata(data){
    console.log("post data", data);
    this.http.post(this.url, data).subscribe();
  }

  updateUser(userdata) {
    console.log('data in update', userdata);
    this.thefrominput = userdata['_id'];

    this.url2 = 'http://localhost:2020/ThingMeter/'+ this.thefrominput + '?token='  + this.token;

    this.http.put(this.url2, userdata).subscribe();
  }


  deletedata(deleteid){

    this.thefrominput = deleteid;
    if(confirm('Are you sure to delete this record ?')){
      // console.log(id);
      this.url2 = 'http://localhost:2020/ThingMeter/'+ this.thefrominput + '?token='  +this.token;
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
    this.NotifyserviceService.warn('::deleted successfully');
        }
  }
}
