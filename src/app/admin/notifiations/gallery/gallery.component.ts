import { Component, OnInit } from '@angular/core';
// import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

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


  constructor() { }

  ngOnInit(): void {
    // this.service.getImageDetailsList();
  }

}
