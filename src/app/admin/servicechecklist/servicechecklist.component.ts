import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-servicechecklist',
  templateUrl: './servicechecklist.component.html',
  styleUrls: ['./servicechecklist.component.scss']
})
export class ServicechecklistComponent implements OnInit {

  constructor() { }
  calendarPlugins = [dayGridPlugin]; // important!
  ngOnInit() {
  }

}
