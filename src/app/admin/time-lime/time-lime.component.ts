import { Component } from '@angular/core';

@Component({
  selector: 'app-time-lime',
  templateUrl: './time-lime.component.html',
  styleUrls: ['./time-lime.component.scss']
})
export class TimeLimeComponent {

  alternate = true;
  toggle = true;
  color = false;
  size = 30;
  expandEnabled = true;

  entries = [
    {
      Location :'Plant 1',
      header: 'Process 1',
      img:'1.jpg',
      Incharge : 'Vinayaka - 080 84784557',
      content:  [{list : 'Flow Meter 1',status : 'Active' , Type :'water'},
      {list : 'Flow Meter 2',status : 'Active' , Type :'water'},
      {list : 'Enegry Meter 1',status : 'Active', Type :'Electric'},
      {list : 'Enegry Meter 2',status : 'Deactive', Type :'Electric'},
      {list : 'Gass Meter 1',status : 'Active', Type :'Gass'}]
    },
    {
      Location :'Plant 2',
      header: 'Process 2',
      img:'2.jpg',
      Incharge : 'KG - 080 84784555',
      content:  [{list : 'Flow Meter 1',status : 'Active' , Type :'Water'},
      {list : 'Flow Meter 2',status : 'Active' , Type :'Water'},
      {list : 'Enegry Meter 1',status : 'Deactive' , Type :'Electric'},
      {list : 'Pressure Meter 1',status : 'Active', Type :'Pressure'},]

    },
    {
      Location :'Plant 3',
      header: 'Process 3',
      img:'3.jpg',
      Incharge : 'Sai Kumar - 080 84784556',
      content: [{list : 'Flow Meter 1' , status : 'Active', Type :'water'},
      {list : 'Flow Meter 2',status : 'Active' , Type :'water'},
      {list : 'Enegry Meter 1' ,status : 'Active' , Type :'Electric'},
      {list : 'Pressure Meter 1',status : 'Active' , Type :'Pressure'}]
    },

  ];

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }
}
