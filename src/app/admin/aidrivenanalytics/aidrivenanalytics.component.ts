import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aidrivenanalytics',
  templateUrl: './aidrivenanalytics.component.html',
  styleUrls: ['./aidrivenanalytics.component.scss']
})
export class AidrivenanalyticsComponent implements OnInit {

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

  Meters = [
    {Meter : 'Meter 1'},
    {Meter : 'Meter 2'},
    {Meter : 'Meter 3'},
    {Meter : 'Meter 4'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
