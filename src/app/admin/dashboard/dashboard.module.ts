import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { EarningComponent } from './components/earning/earning.component';
import { MatIconModule, MatFormFieldModule, MatSelectModule, MatButtonModule } from '@angular/material';
import { ReportWeekComponent } from './components/report-week/report-week.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { CostComponent } from './components/cost/cost.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';
import { TotalComponent } from './components/total/total.component';
import { ReportStore } from './components/report-week/store/report.store';
import { EffectsModule } from '@ngrx/effects';
import { ReportEffect } from './components/report-week/effects/report.effect';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardModule } from '@addapptables/card';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
  imports: [
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
MatFormFieldModule,
    ChartsModule,
    SharedModule,
    DashboardRoutingModule,
    CardModule,
    MatIconModule,
    BarChartModule,
    ReduxRegisterModule.forFeature('dashboard', {
      report: ReportStore
    }),
    EffectsModule.forFeature([ReportEffect])
  ],
  declarations: [DashboardComponent, EarningComponent, ReportWeekComponent, CostComponent, SubtotalComponent, TotalComponent]
})
export class DashboardModule { }
