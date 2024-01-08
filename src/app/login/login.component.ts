import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  login(): void {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    const role = this.loginForm.controls['role'].value;

    const url = `http://localhost:2000/login/${username}/${password}/${role}`;

    this.http.get(url, { responseType: 'text' }).subscribe(
      (data: any) => {
        this.handleLoginResponse(data, username);
      },
      (error: any) => {
        console.error(error);
        this.toastr.error('Error occurred while logging in');
      }
    );
  }

  handleLoginResponse(data: any, username: string): void {
    if (data === 'Login Successfull') {
      this.notification('Success', 'Login Successfull');
      this.redirectUser(username);
    } else if (data === "You don't have permission to login") {
      this.toastr.warning("You don't have permission to login");
    } else if (data === 'Role status is not matching') {
      this.toastr.warning("Role status is not matching");
    } else if (data === 'Password is incorrect') {
      this.toastr.error('Password is incorrect');
    } else if (data === 'Username is incorrect') {
      this.toastr.error('Username is incorrect');
    } else {
      this.toastr.error('Something went wrong, Please try again');
    }
  }

  redirectUser(username: string): void {
    if (username === 'Admin') {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['employee']);
    }
  }

  navigateToHome(): void {
    this.router.navigate(['home']);
  }

  goToSignup(): void {
    this.router.navigate(['signup']);
  }

  goToForgetPassword(): void {
    this.router.navigate(['forgetpassword']);
  }

  notification(title: string, text: string): void {
    Swal.fire({
      title: title,
      text: text
    });
  }
}
