import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  constructor(private authService:AuthService,private router:Router ){
  }
  ngOnInit(){
  }
  isTableRoute(): boolean {
  return this.router.url != '/login';
}
}
