import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.scss']
})
export class UploadsComponent implements OnInit {


  StagesForm: FormGroup = new FormGroup({

    Location : new FormControl('',Validators.required),
    Plant: new FormControl(''),
    Meter: new FormControl(''),
    Process: new FormControl(''),
    videoName: new FormControl(''),


  });


  initialzeFormGroup(){
    this.StagesForm.setValue({
      _id : null,
      Location : '',
      Plant: '',
      Meter: '',
      Process: '',
      videoName: ''
    });

  }
  constructor() { }

  ngOnInit() {
  }
  onClear(){

  }

  onSubmit(){

  }
}
