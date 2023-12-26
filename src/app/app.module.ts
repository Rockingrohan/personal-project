import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { AuthGuard } from './auth.guard'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    EmployeeComponent,
    LoginComponent,
    SignupComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 2300,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true
    }),
    BrowserAnimationsModule
  ],
  // providers: [AuthGuard], // Use AuthGuard here if not already done
  bootstrap: [AppComponent]
})
export class AppModule { }
