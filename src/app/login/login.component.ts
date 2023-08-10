import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!:any
  password!:any
  typeSelected = 'ball-fussion';
  constructor(private authService: AuthService, private router: Router,private toastr: ToastrService,
   private spinnerService: NgxSpinnerService ) {}
 ngOnInit(){
this.showSpinner()
 }
  login(email:any,password:any) {
    this.authService.login(email,password);
  }
  showSpinner(): void {
  this.spinnerService.show();
  setTimeout(() => {
    this.spinnerService.hide();
  }, 700);
  }
}
