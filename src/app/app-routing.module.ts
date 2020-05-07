import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthguardGuard } from './auth/authguard.guard';


const routes: Routes = [
    {
        path: 'admin',
        loadChildren: 'src/app/admin/admin.module#AdminModule',
        // canActivate : [AuthguardGuard]
    },
    {
        path: 'pages',
        loadChildren: 'src/app/pages/pages.module#PagesModule'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'register',
        redirectTo: 'register',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
