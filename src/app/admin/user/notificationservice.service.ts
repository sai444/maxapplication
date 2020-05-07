
import { Injectable } from '@angular/core';
import { MatSnackBar , MatSnackBarConfig } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class NotificationserviceService {

  constructor(private snackBar: MatSnackBar) { }

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition : 'right',
    verticalPosition :'top'
  }

  success(msg){
    this.snackBar.open(msg,'',this.config);
  }

  warn(msg){
    this.snackBar.open(msg,'',this.config);
  }
}
