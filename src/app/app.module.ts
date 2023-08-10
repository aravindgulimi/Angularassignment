import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card'; // Add this line
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; // Add this line
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr'; // Import the module
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import the module
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [MatProgressSpinnerModule,
    NgxSpinnerModule,
    BrowserModule,
    ToastrModule.forRoot(), // Configure the module
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule, 
    FormsModule,
    MatInputModule,
    MatTableModule,MatPaginatorModule, BrowserAnimationsModule,
  ],
  providers: [],
  exports:[MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
