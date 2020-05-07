import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UserComponent } from './user/user.component';
import { ThingComponent } from './thing/thing.component';
import { ServicechecklistComponent } from './servicechecklist/servicechecklist.component';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { ReportsComponent } from './reports/reports.component';

import { ProcessComponent } from './process/process.component';
import { ProcessboardComponent } from './processboard/processboard.component';
import { NotifiationsComponent } from './notifiations/notifiations.component';
import { AidrivenanalyticsComponent } from './aidrivenanalytics/aidrivenanalytics.component';


// lazy load for all routers
const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'time-line',
      pathMatch: 'full'
    },
    {
      path: 'ai',
      component : AidrivenanalyticsComponent
    },
    {
      path : 'config/users',
      component : UserComponent

    },
    {
      path : 'config/thing',
      component : ThingComponent

    },
    {
      path : 'sl',
      component : ServicechecklistComponent

    },
    {
      path : 'so',
      component : ServiceOrderComponent

    },
    {
      path : 'alarms',
      component : AlarmsComponent

    },
    {
      path : 'reports',
      component : ReportsComponent

    },
    {
      path : 'Notifi',
      component : NotifiationsComponent

    },
    {
      path : 'config/pc',
      component : ProcessComponent

    },
    {
      path : 'pb',
      component : ProcessboardComponent

    },
    {
      path: 'dashboard',
      loadChildren: 'src/app/admin/dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'forms',
      loadChildren: 'src/app/admin/forms/forms.module#FormsModule'
    },
    {
      path: 'components',
      loadChildren: 'src/app/admin/components/components.module#ComponentsModule'
    },
    {
      path: 'tables',
      loadChildren: 'src/app/admin/tables/tables.module#TablesModule'
    },
    {
      path: 'calendar',
      loadChildren: 'src/app/admin/calendar/calendar.module#CalendarModule'
    },
    {
      path: 'typography',
      loadChildren: 'src/app/admin/typography/typography.module#TypographyModule'
    },
    {
      path: 'drag-and-drop',
      loadChildren: 'src/app/admin/drag-and-drop/drag-and-drop.module#DragAndDropModule'
    },
    {
      path: 'time-line',
      loadChildren: 'src/app/admin/time-lime/time-lime.module#TimeLimeModule'
    },
    {
      path: 'documentation',
      loadChildren: 'src/app/admin/documentation/documentation.module#DocumentationModule'
    },
    {
      path: 'ecommerce',
      loadChildren: 'src/app/admin/ecommerce/ecommerce.module#ECommerceModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
