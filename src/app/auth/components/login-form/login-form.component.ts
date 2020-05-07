import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AuthservService } from '../../authserv.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
token;
Role;
  // reactive form
  form: FormGroup = new FormGroup({

    username : new FormControl('',Validators.required),
    password: new FormControl('')


  });


  /**
  * Constructor
  */
  constructor(_fb: FormBuilder, private readonly _router: Router, private http:HttpClient ,private auth:AuthservService ) {
    // build reactive forms
    this.form = _fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [null]
    });
  }

  /**
  * login
  */
 showSpinner = true;
 tokenId;
 url = 'http://122.166.167.113:5200/login';
   postData() {
     console.log(this.form.value);
     localStorage.setItem('urls', 'http://122.166.167.113:5200/');
     localStorage.setItem('userform', this.form.value.username)
     this.http.post(this.url, this.form.value).subscribe(

       res => {

         console.log(res);
         this.tokenId = res;
         console.log(this.tokenId.token);
         this.token =(this.tokenId.token);
         this.Role =(this.tokenId.Role);
        this.auth.setLoggedIn(true)

        localStorage.setItem('tokenid', this.tokenId.token)
        localStorage.setItem('Role', this.tokenId.Role)
        localStorage.setItem('Username', this.tokenId.username)
         // tslint:disable-next-line: label-position

         this._router.navigate(['/admin/dashboard']);
         this.showSpinner = false;
       },
       (err: HttpErrorResponse) => {
         if (err.error){
          Swal.fire('Oops...', 'User or Password!', 'error')
         }
         console.log(err.error);
         console.log(err.name);
         console.log(err.message);

         console.log(err.status);
       }
     );
   }

}
