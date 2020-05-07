import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingComponent } from '../thing/thing.component';
import { ThingtypeComponent } from './thingtype/thingtype.component';
import { AddThingtypeComponent } from './thingtype/add-thingtype/add-thingtype.component';
import { ThingSeriesComponent } from './thing-series/thing-series.component';
import { AddThingseriesComponent } from './thing-series/add-thingseries/add-thingseries.component';
import { ThingTemplateComponent } from './thing-template/thing-template.component';
import { AddThingtemplateComponent } from './thing-template/add-thingtemplate/add-thingtemplate.component';
import { ThingparametersComponent } from './thingparameters/thingparameters.component';
import { AddThingparametersComponent } from './thingparameters/add-thingparameters/add-thingparameters.component';
import { ThingrulesComponent } from './thingrules/thingrules.component';
import { AddThingrulesComponent } from './thingrules/add-thingrules/add-thingrules.component';
import { SensorsComponent } from './sensors/sensors.component';
import { AddSensorsComponent } from './sensors/add-sensors/add-sensors.component';
import { MatSelectModule
  ,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
   MatNativeDateModule,
    MatCheckboxModule,
      MatDatepickerModule,
  MatRadioModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  } from '@angular/material';
  import { ComponentsModule } from '../components/components.module';
  import { HttpClientModule } from '@angular/common/http';
  import { ReactiveFormsModule, FormsModule } from '@angular/forms';
  import { EffectsModule } from '@ngrx/effects';
  import { CardModule } from '@addapptables/card';
  import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { MainthingComponent } from './mainthing/mainthing.component';
import { AddMainthingComponent } from './mainthing/add-mainthing/add-mainthing.component';
@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ThingComponent, ThingtypeComponent, AddThingtypeComponent, ThingSeriesComponent, AddThingseriesComponent, ThingTemplateComponent, AddThingtemplateComponent, ThingparametersComponent, AddThingparametersComponent, ThingrulesComponent, AddThingrulesComponent, SensorsComponent, AddSensorsComponent, MainthingComponent, AddMainthingComponent],
  imports: [
    CommonModule,
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
MatPaginatorModule,
MatSortModule,
MatDialogModule,
MatToolbarModule
  ],
  exports: [
   ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  entryComponents: [ AddMainthingComponent,
    AddThingtypeComponent,
    AddThingseriesComponent,
    AddThingtemplateComponent,
    AddThingparametersComponent,
AddSensorsComponent,
     ]
})
export class ThingModule { }
