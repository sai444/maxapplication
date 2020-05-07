import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicechecklistComponent } from './servicechecklist.component';

import { ProcessboardModule } from '../processboard/processboard.module';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { FormsModule } from '@angular/forms';


import { MatIconModule, MatButtonModule } from '@angular/material';
import { CalendarModule } from 'angular-calendar';
import { ListsComponent } from './lists/lists.component';
@NgModule({
  declarations: [ServicechecklistComponent, ListsComponent],
  imports: [

    FullCalendarModule,
    CommonModule,
    ProcessboardModule,
    CommonModule,
    FormsModule,
MatIconModule,
MatButtonModule,
CalendarModule

  ]
})
export class ServicechecklistModule { }
