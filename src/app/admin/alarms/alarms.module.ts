import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmsComponent } from './alarms.component';
import { ProcessboardModule } from '../processboard/processboard.module';
import { AlarmlistComponent } from './alarmlist/alarmlist.component';
import { RemarkalarmComponent } from './alarmlist/remarkalarm/remarkalarm.component';
import { MatTableModule,
  MatIconModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatTabsModule,
   MatButtonModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRadioModule,
  MatPaginatorModule,
MatSortModule,
MatDialogModule,
MatToolbarModule} from '@angular/material';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CardModule } from '@addapptables/card';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';

@NgModule({
  declarations: [AlarmsComponent, AlarmlistComponent, RemarkalarmComponent],
  imports: [
    CommonModule,
    ProcessboardModule,
    ComponentsModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,



    EffectsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
MatRadioModule,


    CardModule,
    ReduxRegisterModule,

MatPaginatorModule,
MatSortModule,
MatDialogModule,
MatToolbarModule
  ],
  entryComponents: [
    RemarkalarmComponent
     ]

})
export class AlarmsModule { }
