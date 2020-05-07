import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.scss']
})
export class ServiceOrderComponent implements OnInit {

  constructor() { }
  Locations = [
    {places : 'Banagalore'},
    {places : 'Tirupathi'},
    {places : 'Chennai'},
    {places : 'Manglore'},
  ]
  Plants = [
    {plant : 'Plant 1'},
    {plant : 'Plant 2'},
    {plant : 'Plant 3'},
    {plant : 'Plant 4'},
  ]

  Process = [
    {Process : 'Process 1'},
    {Process : 'Process 2'},
    {Process : 'Process 3'},
    {Process : 'Process 4'},
  ]
  Meter = [
    {Meter : 'Meter 1'},
    {Meter : 'Meter 2'},
    {Meter : 'Meter 3'},
    {Meter : 'Meter 4'},
  ]


  todo = [
    'Current',
    'PF',
    'Vibration',
    'Reading',
    'Voltage '
  ];

  done = [
    'Calibration',
    'Vibration',
    'Temperature',
    'Oil',

  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        console.log(event);

    }
  }
  ngOnInit(){

       }
       opensweetalert()
  {
    Swal.fire({
        text: 'Hello!',
        icon: 'success'
      });
  }
  opensweetalertdng()
  {
   Swal.fire('Oops...', 'Something went wrong!', 'error')
  }

  opensweetalertcst(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
      }
    })
  }


}
