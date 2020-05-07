import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessboardComponent } from './processboard.component';
import { MatIconModule, MatGridListModule, MatTableModule,
   MatSnackBarModule, MatFormFieldModule, MatInputModule,
   MatTabsModule, MatToolbarModule, MatButtonModule, MatNativeDateModule,
   MatCheckboxModule, MatSelectModule, MatDatepickerModule,
   MatRadioModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';

import { CardModule } from '@addapptables/card';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ProcessboardComponent],
  imports: [


    NgxChartsModule,
    ChartsModule,
    ReduxRegisterModule,
    CardModule,
    CommonModule,
    EffectsModule,
    MatIconModule,

MatGridListModule,
CommonModule,
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


  ],
  exports:[
    NgxChartsModule,
    ChartsModule,
    ReduxRegisterModule,
    CardModule,
    CommonModule,
    EffectsModule,
    MatIconModule,

MatGridListModule,
CommonModule,
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
ReduxRegisterModule,]

})
export class ProcessboardModule { }
