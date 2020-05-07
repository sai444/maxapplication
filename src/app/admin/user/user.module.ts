import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysuserComponent } from './sysuser/sysuser.component';
import { AddSysuserComponent } from './sysuser/add-sysuser/add-sysuser.component';
import { UserComponent } from './user.component';
import { EnduserComponent } from './enduser/enduser.component';
import { AddEnduserComponent } from './enduser/add-enduser/add-enduser.component';
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
import { PlantComponent } from './plant/plant.component';
import { AddPlantComponent } from './plant/add-plant/add-plant.component';
import { CompanyComponent } from './company/company.component';
import { AddcompanyComponent } from './company/addcompany/addcompany.component';
import { BlockComponent } from './block/block.component';
import { AddblockComponent } from './block/addblock/addblock.component';
import { DeptComponent } from './dept/dept.component';
import { AdddeptComponent } from './dept/adddept/adddept.component';
import { RoleComponent } from './role/role.component';
import { AddroleComponent } from './role/addrole/addrole.component';

@NgModule({
  declarations: [SysuserComponent, AddSysuserComponent, UserComponent, EnduserComponent, AddEnduserComponent, PlantComponent, AddPlantComponent, CompanyComponent, AddcompanyComponent, BlockComponent, AddblockComponent, DeptComponent, AdddeptComponent, RoleComponent, AddroleComponent],
  imports: [
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
  exports : [


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
  entryComponents: [
    AddEnduserComponent,
    AddSysuserComponent,
    AddPlantComponent,
    AddcompanyComponent,
    AddroleComponent,
    AdddeptComponent,
    AddblockComponent,
     ]
})
export class UserModule { }
