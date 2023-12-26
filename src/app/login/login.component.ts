import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  initializeLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  public login(): void {
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    const role = this.loginForm.controls['role'].value;
    const url =`http://localhost:2000/login/${username}/${password}/${role}`;

    this.http.get(url,{responseType:'text'}).subscribe(data=>{
      if (data === 'Login Successful') {
        this.notification('Success', 'Login Successful');
  
        if (username === 'Admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['employee']);
        }
      } else if (data === "You don't have permission to login") {
        this.toastr.warning("You don't have permission to login");
      } else if (data === 'Role status is not matching') {
        this.toastr.warning('Role status is not matching');
      } else if (data === 'Password is incorrect') {
        this.toastr.error('Password is incorrect');
      } else if (data === 'Username is incorrect') {
        this.toastr.error('Username is incorrect');
      } else {
        this.toastr.error('Something went wrong, Please try again');
      }
    });
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
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
