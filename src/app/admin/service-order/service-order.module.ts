import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceOrderComponent } from './service-order.component';
import { AddServiceOrderComponent } from './add-service-order/add-service-order.component';
import { ServicechecklistComponent } from './add-serviceOrder/servicechecklist/servicechecklist.component';
import { AddCheckpointsComponent } from './add-serviceOrder/add-checkpoints/add-checkpoints.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { CardModule } from '@addapptables/card';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { ProcessboardModule } from '../processboard/processboard.module';
import { ChartsModule } from 'ng2-charts';
import { MatVideoModule } from 'mat-video';
import { mainMaterialModule } from '../matmodules.module';

@NgModule({
  declarations: [ServiceOrderComponent, AddServiceOrderComponent, ServicechecklistComponent, AddCheckpointsComponent],
  imports: [
    mainMaterialModule,
    CommonModule,
    FullCalendarModule,
    CardModule,
    CommonModule,
    ReduxRegisterModule,
    ProcessboardModule,
    ChartsModule,
    MatVideoModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class ServiceOrderModule { }
