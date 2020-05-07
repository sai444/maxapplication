import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCheckboxModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from '@addapptables/card';
import { TranslateModule } from '@addapptable/components/translate/translate.module';
import { RegisterComponent } from './components/register/register.component';
import { RegisterFormComponent } from './components/register/components/register-form/register-form.component';
import { ProgressBarModule } from '@addapptable/components/progress-bar/progress-bar.module';
import { UserModule } from '../admin/user/user.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
@NgModule({
    imports: [
      NgCircleProgressModule.forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: '#78C000',
        innerStrokeColor: '#C7E596',
        animationDuration: 300,
      })
,

      UserModule,
        SharedModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        CardModule,

        // Material modules
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        TranslateModule,
        MatCheckboxModule,
        ProgressBarModule
    ],
    declarations: [
        LoginFormComponent,
        AuthComponent,
        RegisterComponent,
        RegisterFormComponent
    ]
})
export class AuthModule { }
