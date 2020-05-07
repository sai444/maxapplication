import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifiationsComponent } from './notifiations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NotifiComponent } from './notifi/notifi.component';
import { UploadsComponent } from './uploads/uploads.component';
import { ProcessboardModule } from '../processboard/processboard.module';
import { ImageComponent } from './gallery/image/image.component';
import { ImageListComponent } from './gallery/image-list/image-list.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatVideoModule } from 'mat-video';
import { CardModule } from '@addapptables/card';
import { ReduxRegisterModule } from '@addapptables/ngrx-actions';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [NotifiationsComponent, GalleryComponent, NotifiComponent, UploadsComponent, ImageComponent, ImageListComponent],
  imports: [
    CardModule,
    CommonModule,
    ReduxRegisterModule,
    ProcessboardModule,
    ChartsModule,
    MatVideoModule,
    ReactiveFormsModule,

  ]
})
export class NotifiationsModule { }
