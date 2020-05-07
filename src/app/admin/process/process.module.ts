import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagesComponent } from './stages/stages.component';
import { AddStagesComponent } from './stages/add-stages/add-stages.component';
import { StagestemplateComponent } from './stagestemplate/stagestemplate.component';
import { AddStagestemplateComponent } from './stagestemplate/add-stagestemplate/add-stagestemplate.component';
import { StageparametersComponent } from './stageparameters/stageparameters.component';
import { AddStageparametersComponent } from './stageparameters/add-stageparameters/add-stageparameters.component';
import { MainprocessComponent } from './mainprocess/mainprocess.component';
import { AddMainprocessComponent } from './mainprocess/add-mainprocess/add-mainprocess.component';
import { UserModule } from '../user/user.module';
import { MatTabsModule ,

  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,

  MatToolbarModule,
  MatButtonModule,
  MatSnackBarModule,

  MatIconModule,
  MatTableModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRadioModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from '@addapptables/card';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { ProcesstreeComponent } from './processtree/processtree.component';
import { OrgChartModule } from '@mondal/org-chart';
import { ServiceorderconfigComponent } from './serviceorderconfig/serviceorderconfig.component';
import { AddserviceorderconfigComponent } from './serviceorderconfig/addserviceorderconfig/addserviceorderconfig.component';
import { AddsrorderComponent } from './serviceorderconfig/addsrorder/addsrorder.component';
import { ProcesschainComponent } from './processchain/processchain.component';
import { AddprocesschainComponent } from './processchain/addprocesschain/addprocesschain.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [StagesComponent, AddStagesComponent,
     StagestemplateComponent, AddStagestemplateComponent,
     StageparametersComponent, AddStageparametersComponent,
     MainprocessComponent, AddMainprocessComponent, ProcesstreeComponent, ServiceorderconfigComponent, AddsrorderComponent,AddserviceorderconfigComponent, ProcesschainComponent, AddprocesschainComponent],
  imports: [
    CommonModule,
    OrgChartModule ,
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
CommonModule,
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

  ], exports: [StagesComponent, AddStagesComponent,
    StagestemplateComponent, AddStagestemplateComponent,
    StageparametersComponent, AddStageparametersComponent,
    MainprocessComponent, AddMainprocessComponent,
    ProcesstreeComponent,
    ServiceorderconfigComponent,ProcesschainComponent],
    entryComponents: [
      AddMainprocessComponent,
      AddStagesComponent,
      AddMainprocessComponent,
      AddStageparametersComponent,
      AddStagestemplateComponent,
      AddsrorderComponent,
    AddprocesschainComponent,
    AddMainprocessComponent]

})
export class ProcessModule { }
