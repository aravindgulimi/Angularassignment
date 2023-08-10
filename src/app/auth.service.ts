import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 isLoggedIn = false;
 parseToken:any='';
 constructor(private apiSrv:ApiService,private router: Router,private snackBar: MatSnackBar,
  private spinnerService: NgxSpinnerService) {}
  typeSelected = 'ball-fussion';
  login(email:any,password:any) {
    this.showSpinner();
    this.apiSrv.login(email,password).subscribe((data:any)=>{
    this.isLoggedIn = true;
    this.spinnerService.hide();
    localStorage.setItem('token',JSON.stringify(data?.token))
    this.router.navigate(['/table']);
    },
    (error:any)=>{
    this.spinnerService.hide();
    if(error?.status== 401){
    this.showSnackbarTopPosition('Invalid Email and Password','Done','2000')
    }else{
    this.showSnackbarTopPosition('Login Api CORS Issue','Done','2000')
    }
    this.isLoggedIn = false;
    })
  }
  isLoggedInUser():any {
    let token:any = localStorage.getItem('token');
    this.parseToken= JSON.parse(token);
    if (this.parseToken ==null ||  this.parseToken =='') {
      return false;
    }else{
      return true;
    }
  }
  getToken(){
    let token:any = localStorage.getItem('token');
    this.parseToken= JSON.parse(token);
    return this.parseToken;
  }
  showSnackbarTopPosition(content:any, action:any, duration:any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      verticalPosition: "top", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
  });
  }
  showSpinner(): void {
    this.spinnerService.show();
  }
  hideSpinner() :void{
  this.spinnerService.hide();
  }
}
