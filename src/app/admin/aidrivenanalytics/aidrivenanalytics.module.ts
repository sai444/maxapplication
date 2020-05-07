import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AidrivenanalyticsComponent } from './aidrivenanalytics.component';
import { UserModule } from '../user/user.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatGridListModule,
  MatInputModule, MatTabsModule, MatToolbarModule,
  MatButtonModule, MatSnackBarModule, MatTableModule,
   MatIconModule, MatNativeDateModule, MatCheckboxModule,
   MatSelectModule, MatDatepickerModule, MatRadioModule,
   MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CardModule } from '@addapptables/card';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
@NgModule({
  declarations: [AidrivenanalyticsComponent],
  imports: [
    CommonModule,

    UserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,

    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,

    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    EffectsModule,

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
  ]
})
export class AidrivenanalyticsModule { }
