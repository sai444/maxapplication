import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ProgressBarModule } from '@addapptable/components/progress-bar/progress-bar.module';
import { AddapptableContainerModule } from '@addapptable/components/addapptable-container/addapptable-container.module';
import { MatButtonModule } from '@angular/material';
import { SidebarModule } from 'ng-sidebar';
import { ConfigurationComponent } from './layout/components/configuration/configuration.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { ProcessComponent } from './process/process.component';
import { ThingModule } from './thing/thing.module';
import { ServiceOrderModule } from './service-order/service-order.module';
import { ServicechecklistModule } from './servicechecklist/servicechecklist.module';
import { AlarmsModule } from './alarms/alarms.module';
import { ReportsModule } from './reports/reports.module';
import { NotifiationsModule } from './notifiations/notifiations.module';
import { ProcessModule } from './process/process.module';
import { ProcessboardModule } from './processboard/processboard.module';
import { AidrivenanalyticsModule } from './aidrivenanalytics/aidrivenanalytics.module';




@NgModule({
  imports: [
    AidrivenanalyticsModule,
    ProcessModule,
    ProcessboardModule,
    ServiceOrderModule,
    ServicechecklistModule,
    AlarmsModule,
    ReportsModule,
    NotifiationsModule,
    ThingModule,
    UserModule,
    SharedModule,
    AdminRoutingModule,
    MenuModule,
    ToolbarModule,
    ProgressBarModule,
    AddapptableContainerModule,
    MatButtonModule,
    SidebarModule,
    MatRadioModule,
    FormsModule
  ],
  declarations: [LayoutComponent, ConfigurationComponent, ProcessComponent]
})
export class AdminModule { }
